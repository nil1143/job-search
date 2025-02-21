import { inngest } from "./client";
import { prisma } from "../db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handleJobExpiration = inngest.createFunction(
  {
    id: "job-expiration",
    cancelOn: [
      {
        event: "job/cancel.expiration",
        if: "event.data.jobId == async.data.jobId",
      },
    ],
  },
  { event: "job/created" },
  async ({ event, step }) => {
    const { jobId, expirationDays } = event.data;

    // Wait for the specified duration
    await step.sleep("wait-for-expiration", `${expirationDays}d`);

    // Update job status to expired
    await step.run("update-job-status", async () => {
      await prisma.jobPost.update({
        where: { id: jobId },
        data: { status: "EXPIRED" },
      });
    });

    return { jobId, message: "Job marked as expired" };
  }
);

export const sendPeriodicJobListings = inngest.createFunction(
  { id: "send-job-listings" },
  { event: "jobseeker/created" },
  async ({ event, step }) => {
    const { userId, email } = event.data;

    const totalDays = 30;
    const intervalDays = 2;
    let currentDay = 0;

    while (currentDay < totalDays) {
      await step.sleep("wait-interval", `${intervalDays}d`);
      currentDay += intervalDays;

      const recentJobs = await step.run("fetch-recent-jobs", async () => {
        return await prisma.jobPost.findMany({
          where: {
            status: "ACTIVE",
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 10,
          include: {
            company: {
              select: {
                name: true,
              },
            },
          },
        });
      });

      if (recentJobs.length > 0) {
        await step.run("send-email", async () => {
          const jobListingsHtml = recentJobs
            .map(
              (job) => `
          <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #eee; border-radius: 5px">
          <h3 style="margin: 0;">${job.jobTitle}</h3>
          <p style="margin: 5px 0;">${job.company.name} ${job.location}</p>
          <p style="margin: 5px 0;"> $${job.salaryFrom.toLocaleString()} - $${job.salaryTo.toLocaleString()}</p>
          </div>`
            )
            .join("");

          await resend.emails.send({
            from: "Acme <onboarding@resend.dev",
            to: ["tnil1143@gmail.com"],
            subject: "Latest job opportunities for you",
            html: "<strong>It works!</strong>",
            // html: `
            // <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            // <h2>Latest Job Opportunities</h2>
            // ${jobListingsHtml}
            // <div style="margin-top: 30px; text-align: center;">
            // <a href="${process.env.NEXT_PUBLIC_URL}"
            // style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View More</a>
            // </div>
            // </div>
            // `,
          });
        });
      }
    }

    return { userId, message: "Completed 30 day job listing notifications" };
  }
);

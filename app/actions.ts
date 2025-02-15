"use server";

import { redirect } from "next/navigation";
import { prisma } from "./utils/db";
import requireUser from "./utils/requireUser";
import { companySchema } from "./utils/zodSchemas";
import { z } from "zod";

export async function createCompany(data: z.infer<typeof companySchema>) {
  const user = await requireUser();

  // Server-side validation
  const validatedData = companySchema.parse(data);

  console.log(validatedData);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "COMPANY",
      Company: {
        create: {
          ...validatedData,
        },
      },
    },
  });

  return redirect("/");
}

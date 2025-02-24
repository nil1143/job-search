import { EmptyState } from "@/components/general/EmptyState";
import React from "react";

import { JobCard } from "@/components/general/JobCard";

import { prisma } from "@/app/utils/db";
import requireUser from "@/app/utils/requireUser";

async function getFavorites(userId: string) {
  const data = await prisma.savedJobPost.findMany({
    where: {
      userId: userId,
    },
    select: {
      JobPost: {
        select: {
          id: true,
          jobTitle: true,
          salaryFrom: true,
          salaryTo: true,
          employmentType: true,
          location: true,
          createdAt: true,
          company: {
            select: {
              name: true,
              logo: true,
              location: true,
              about: true,
            },
          },
        },
      },
    },
  });

  return data;
}

const FavoritesPage = async () => {
  const session = await requireUser();
  const favorites = await getFavorites(session?.id as string);

  if (favorites.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        description="You don't have any favorites yet."
        buttonText="Find a job"
        href="/jobs"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 my-5   gap-4">
      <h2>Saved Jobs</h2>
      {favorites.map((favorite) =>
        favorite.JobPost ? (
          <JobCard key={favorite.JobPost?.id} job={favorite.JobPost} />
        ) : null
      )}
    </div>
  );
};

export default FavoritesPage;

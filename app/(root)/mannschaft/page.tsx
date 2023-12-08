import React from "react";
import Link from "next/link";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { getAllUsers, getUserById, getUsersByIds } from "@/lib/actions/user.action";
import UserCard from "@/components/cards/UserCard";
import { SearchParamsProps } from "@/types";
import Filter from "@/components/shared/Filter";
import { UserFilters } from "@/constants/filters";
import Pagination from "@/components/shared/Pagination";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mannschaft | Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate withe developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

const Community = async ({ searchParams }: SearchParamsProps) => {
  const result = await getAllUsers({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  const selectedUserIds = [
    "user_2Y1niwNVKEjOoDWcx6QulcCNtuA",
    "user_2ZECurG9aYoZq9jWuURI1nsUTag",
    "user_2ZEHhK4iMQxWm0ClDmFgUVzZVex",
    "user_2ZEMj3hAqAIpO5VGYc6Vi0fe3l6",
  ];
  
  const users = await getUsersByIds(selectedUserIds);
  console.log(users);
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Der Mannschaft : vous nous avez trouvés !</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing minds"
          otherClasses="flex-1"
        />

        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <img
        src="/assets/images/Manshaft.jpg"  // Replace with the actual path to your image
        alt="Selected Users"
        className="w-full max-w-screen-lg mx-auto mt-6 mb-4 rounded-lg"
      />
      <h2 className="h1-bold text-dark100_light900">Les profils de la Mannschaft :</h2>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users yet!</p>

            <Link href="/sign-up" className="mt-1 font-bold text-accent-blue">
              Join to be the first!
            </Link>
          </div>
        )}
      </section>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default Community;
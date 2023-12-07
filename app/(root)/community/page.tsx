import React from "react";
import Link from "next/link";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { getAllUsers } from "@/lib/actions/user.action";
import UserCard from "@/components/cards/UserCard";
import { SearchParamsProps } from "@/types";
import Filter from "@/components/shared/Filter";
import { UserFilters } from "@/constants/filters";
import Pagination from "@/components/shared/Pagination";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Communauté | Eco-Vérité",
  description:
    "Une plateforme communautaire dédiée à poser et répondre à des questions sur le changement climatique et la durabilité environnementale. Obtenez de l'aide, partagez vos connaissances et collaborez avec d'autres Econautes du monde entier. Explorez des sujets liés à la science du climat, aux pratiques durables, aux politiques environnementales et bien plus encore.",
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

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Tout nos éconautes</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Découvrir les sauveurs de la planète ..."
          otherClasses="flex-1"
        />

        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user: any) => (
            <UserCard key={user._id} user={user} />
          ))
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>{"Pas encore d'énonaute 😔"}</p>

            <Link href="/sign-up" className="mt-1 font-bold text-accent-blue">
              Enregistrez vous pour être le premier éconautes!
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

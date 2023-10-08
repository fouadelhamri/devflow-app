import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="sm-items-center flex w-full flex-col-reverse justify-between gap-4 sm:flex-row">
        <h1 className="h1-bold text-dark100_light900">Top question</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-2 !text-light-900 max-sm:w-full">
            Ask Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          otherClasses="flex-1"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search for questions"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
    </>
  );
}

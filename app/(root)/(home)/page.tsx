import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import NoResult from "@/components/shared/skeleton/NoResult";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
const questions = [
  {
    _id: "1", // Changed to a string
    title: "Cascading Deletes in Sql Scheme ?",
    tags: [
      { _id: "1", name: "python" }, // Changed to string
      { _id: "2", name: "sql" }, // Changed to string
    ],
    author: { _id: "1", name: "John Doe", picture: "john-doe.jpg" }, // Changed to an object
    upvotes: 33,
    views: 193030,
    answers: [], // Initialize as an empty array since it's an array of objects
    createdAt: new Date("2021-04-04T12:00:00.000Z"), // Converted to a Date object
  },
  {
    _id: "2", // Changed to a string
    title: "How to center a div?",
    tags: [{ _id: "3", name: "css" }], // Changed to string
    author: { _id: "2", name: "Jane Smith", picture: "jane-smith.jpg" }, // Changed to an object
    upvotes: 4503, // Example values
    views: 120, // Example values
    answers: [], // Initialize as an empty array since it's an array of objects
    createdAt: new Date("2023-10-04T13:00:00.000Z"), // Example date
  },
];

// Now, the 'questions' array conforms to the 'QuestionProps' interface.

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
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              author={question.author}
              title={question.title}
              tags={question.tags}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to display."
            description="Be the first to break the silence 🚀, ask question and kickstart the
          discussion. Our query could be the next bug thing others can learn from.
          Get involved 🥇"
            link="/"
            linkTitle="Ask Question"
          />
        )}
      </div>
    </>
  );
}

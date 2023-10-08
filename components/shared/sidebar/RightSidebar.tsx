import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagItem from "../TagItem";
const popularTags = [
  { _id: 1, name: "Javascript", totalQuestions: 4 },
  { _id: 2, name: "React", totalQuestions: 4 },
  { _id: 4, name: "Next", totalQuestions: 4 },
  { _id: 3, name: "Firebase", totalQuestions: 4 },
  { _id: 5, name: "React Native", totalQuestions: 1 },
];
const hotQuestions = [
  {
    _id: 1,
    title:
      "How do i use xp ressHowdo iuseexpressHowdoi use express How do i use express ",
  },
  { _id: 2, title: "How do i use express" },
  { _id: 3, title: "How do i use express" },
  { _id: 4, title: "How do i use express" },
  { _id: 5, title: "How do i use express" },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((ques) => (
            <Link
              className="flex cursor-pointer items-center justify-between gap-7"
              key={ques._id}
              href={`/questions/${ques._id}`}
            >
              <p className="body-medium text-dark500_light700 ">{ques.title}</p>
              <Image
                alt="chevron-icon"
                src="/assets/icons/chevron-right.svg"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-dark200_light900 h3-bold ">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <TagItem key={tag._id} {...tag} showCount />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

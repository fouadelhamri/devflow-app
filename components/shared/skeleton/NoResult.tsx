import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NoResult = (props: {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold text-dark100_light900 mt-8 ">{props.title}</h2>
      <p className="body-regular text-dark500_light700 text-centert my-3 max-w-md">
        {props.description}
      </p>
      <Link href={props.link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900 ">
          {props.linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;

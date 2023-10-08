"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../../ui/input";
interface Props {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeHolder: string;
  otherClasses?: string;
}

const LocalSearchBar = (props: Props) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${props.otherClasses}`}
    >
      {props.iconPosition === "left" && (
        <Image
          src={props.imgSrc}
          alt="search-icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={props.placeHolder || "..."}
        value=""
        onChange={() => {}}
        className="no-focus paragraph-regular placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {props.iconPosition === "right" && (
        <Image
          src={props.imgSrc}
          alt="search-icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchBar;

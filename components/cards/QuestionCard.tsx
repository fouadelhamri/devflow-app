import React from "react";
import TagItem from "../shared/TagItem";
import Link from "next/link";
import Metric from "../shared/Metric";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";

interface QuestionProps {
  _id: string;
  author: { _id: string; name: string; picture: string };
  title: string;
  tags: Array<{ _id: string; name: string }>;
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}
const QuestionCard = (props: QuestionProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9  sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(new Date(String(props.createdAt)))}
          </span>
          <Link href={`/question/${props._id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {props.title}
            </h3>
          </Link>
        </div>
        {/* //TODO: if signed in add Edit,Delete action  */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {props.tags.map((tag) => (
          <TagItem key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="flex-between mt-5 flex w-full flex-wrap gap-3">
        <Metric
          imgUrl={"assets/icons/avatar.svg"}
          alt={"user-icon"}
          value={props.author.name}
          href={`/profile/${props.author._id}`}
          title={`- asked ${getTimestamp(new Date(props.createdAt))} `}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />
        <Metric
          imgUrl={"assets/icons/like.svg"}
          alt={"thumb-icon"}
          value={formatAndDivideNumber(props.upvotes)}
          title="Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl={"assets/icons/message.svg"}
          alt={"message-icon"}
          value={props.answers.length}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl={"assets/icons/eye.svg"}
          alt={"eye-icon"}
          value={formatAndDivideNumber(props.views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;

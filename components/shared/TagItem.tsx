import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}
const TagItem = (props: Props) => {
  return (
    <Link href={`/tags/${props._id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-dark400_light500 rounded-md border-none px-4 py-2 uppercase">
        {props.name}
      </Badge>
      {props.showCount && (
        <p className="small-medium text-dark500_light700">
          {props.totalQuestions}
        </p>
      )}
    </Link>
  );
};

export default TagItem;

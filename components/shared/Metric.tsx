import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}
const Metric = (props: Props) => {
  const metricContent = (
    <>
      <Image
        src={props.imgUrl}
        height={16}
        width={16}
        alt={props.alt}
        className={`object-contain ${props.href ? "rounded-full" : ""}`}
      />
      <p className={`flex items-center gap-1 ${props.textStyles}`}>
        {props.value}
        <span
          className={`small-regular line-clamp-1 ${
            props.isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {props.title}
        </span>
      </p>
    </>
  );

  if (props.href) {
    return (
      <Link href={props.href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }
  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;

"use client";

import React from "react";
import Image from "next/image";

import "@/app/globals.css";
import eye_icon from "@/public/icons/eye_slash.svg";

const Role = ({
  title,
  description,
  imgurl,
  borderColor,
  borderWidth,
  gifmagin,
}: {
  title: string;
  description: string;
  imgurl: string;
  borderColor: string;
  borderWidth: string;
  gifmagin: string;
}) => {
  return (
    <>
      <div
        className={`w-[300px] h-[298px] relative text-center border-solid ${borderColor} ${borderWidth} mx-auto mt-5`}
      >
        <div className="text-[20px] text-primary font-arial font-bold mt-3">
          {title}
        </div>
        <div className="text-sm text-textdarkColor font-arial font-light mt-2 px-[24px]">
          {description}
        </div>
        <Image
          alt="sketch"
          src={imgurl}
          width={191}
          height={122}
          className={`mx-auto ${gifmagin}`}
        />
      </div>
    </>
  );
};

Role.displayName = "Role";

export default Role;

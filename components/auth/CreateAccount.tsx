"use client";

import React, { useState } from "react";
import Image from "next/image";

import "@/app/globals.css";
import eye_slash_icon from "@/public/icons/eye_slash.svg";
import eye_icon from "@/public/icons/eye.png";

type StrengthListType = {
  [key: string]: {
    icon: string;
    color: string;
  };
};

const CreateAccount = ({ passStatus }: { passStatus: string }) => {
  const strengthList: StrengthListType = {
    weak: { icon: "icons/pass_weak.svg", color: "text-primary" },
    normal: {
      icon: "icons/pass_normal.svg",
      color: "text-passwordMediumColor",
    },
    strong: {
      icon: "icons/pass_strong.svg",
      color: "text-passwordStrongColor",
    },
  };

  const [showPassword, setshowPassword] = useState<boolean>(false);

  const [passStrength, setPassStrength] = useState<string>("weak");

  const [mypassword, setMyPassword] = useState<string>("");
  const [myemail, setMyEmail] = useState<string>("");

  return (
    <>
      <div className="relative">
        <label className=" text-textdarkColor font-normal leading-[21px] text-sm">
          Your name
        </label>
        <input
          id="email"
          name="email"
          type="text"
          className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2 leading-[21px] text-sm"
          placeholder="Enter your name"
        />
      </div>
      <div className="relative">
        <label className=" text-textdarkColor font-normal leading-[21px] text-sm">
          E-mail or phone number
        </label>
        <input
          id="email"
          name="email"
          type="text"
          className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2 leading-[21px] text-sm"
          placeholder="Type your e-mail or phone number"
          onChange={(e) => setMyEmail(e.target.value)}
        />
      </div>
      <div className="relative">
        <label className="text-textdarkColor leading-[21px] text-sm">
          Password
        </label>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2"
          placeholder="************"
          onChange={(e) => {
            setMyPassword(e.target.value);
            let passLenght = e.target.value.length;
            if (passLenght >= 0 && passLenght < 6) {
              setPassStrength("weak");
            } else if (passLenght >= 6 && passLenght < 10) {
              setPassStrength("normal");
            } else {
              setPassStrength("strong");
            }
          }}
        />
        <div className="absolute inset-y-0 end-0 grid place-content-center px-5 mt-8">
          <button onClick={() => setshowPassword(!showPassword)}>
            <Image
              alt="eye_icon"
              src={showPassword ? eye_slash_icon : eye_icon}
              width={12}
              height={12}
            />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className=" text-distlineColor sm:text-center text-xs leading-[18px]">
          Must be at least 8 characters
        </div>
        <div className="flex text-right sm:text-center text-xs hover:text-gray-500">
          <Image
            className="object-contain"
            src={strengthList[passStrength].icon}
            alt="pw_status"
            width={9.6}
            height={12}
          ></Image>
          <span
            className={`${strengthList[passStrength].color} text-xs leading-[18px] pl-[5px]`}
          >
            {passStrength}
          </span>
        </div>
      </div>
    </>
  );
};

CreateAccount.displayName = "CreateAccount";

export default CreateAccount;

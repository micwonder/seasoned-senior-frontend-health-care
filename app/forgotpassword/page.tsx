"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import ArrowBack from "@/public/icons/arrow_back.svg";

import WithRightBG from "@/components/auth/WithRightBG";
import LogoImg from "@/components/auth/LogoImg";
import FormPrimaryBtn from "@/components/auth/FormPrimaryBtn";
import ResetPassword from "@/components/auth/ResetPassword";
import SentMailBox from "@/components/auth/SentMailBox";
const Forgotpassword = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <WithRightBG imgpathname="/images/forgot_password.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="absolute top-[159px] left-8 flex justify-center items-center">
          <Image
            alt="logo"
            src={ArrowBack}
            className=" h-auto cursor-pointer z-10"
            width={16}
            height={16}
            priority={true}
          />
          <div onClick={() => router.push("/login")}>
            <div className=" text-base text-distlineColor cursor-pointer">
              Go back to log in
            </div>
          </div>
        </div>
        <div className="font-arial w-[370px] mx-auto mt-[250px] sm:w-full">
          <div className="text-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Forgot password?
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4">
              No worries, we’ll send you reset instructions
            </div>
          </div>
          <div className="mt-8 py-4 px-4 text-base leading-6 space-y-4 text-gray-700">
            <ResetPassword />
            <div className="mt-11">
              <FormPrimaryBtn onClicked={() => setShowModal(true)}>
                {" "}
                Reset password
              </FormPrimaryBtn>
              {showModal && <SentMailBox onClicked={() => router.push("/")} />}
            </div>
          </div>
        </div>
      </WithRightBG>
    </>
  );
};

export default Forgotpassword;

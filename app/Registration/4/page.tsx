"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/auth/WithRightBG";
import LogoImg from "@/components/auth/LogoImg";
import OptionalLbl from "@/components/auth/Registration/OptionalLbl";
import ProgressStatusBar from "@/components/auth/Registration/ProgressStatusBar";
import InputField from "@/components/auth/Registration/InputField";
import SaveExitBtn from "@/components/auth/Registration/SaveExitBtn";
import ContinueBtn from "@/components/auth/Registration/ContinueBtn";
import BackBtn from "@/components/auth/Registration/BackBtn";
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");

  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_3.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] absolute">
          <BackBtn onClicked={() => router.push("/Registration/3")} />
        </div>
        <ProgressStatusBar completeness={4} hasBack={true} />
        <OptionalLbl />
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div className="text-center">
            <div className=" text-[32px] leading-normal text-textdarkColor font-arial font-bold">
              Dietary Restrictions and Preferences
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4 mx-7">
              &nbsp;&nbsp;&nbsp; Are there any specific dietary restrictions,
              preferences, or allergies we should be aware of?
            </div>
            <div className="text-base text-textdarkColor font-arial font-bold mt-6">
              What allergies or restrictions does the person have?
            </div>
          </div>
        </div>
        <div className="mx-5 pl-8 mt-6 ml-4 px-7 pb-7">
          <InputField
            type="text"
            title="List of Allergies"
            placholder="Milk, Tea"
            value={name}
            handleChange={setName}
          />
          <div className="mt-7">
            <InputField
              type="text"
              title="Note"
              placholder="Leave a detailed note"
              value={mail}
              handleChange={setMail}
            />
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-auto">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/Registration/5")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;

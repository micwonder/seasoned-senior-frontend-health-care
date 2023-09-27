"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Children, useState } from "react";

import WithRightBG from "@/components/auth/WithRightBG";
import LogoImg from "@/components/auth/LogoImg";
import OptionalLbl from "@/components/auth/Registration/OptionalLbl";
import ProgressStatusBar from "@/components/auth/Registration/ProgressStatusBar";
import SaveExitBtn from "@/components/auth/Registration/SaveExitBtn";
import ContinueBtn from "@/components/auth/Registration/ContinueBtn";
import BackBtn from "@/components/auth/Registration/BackBtn";
import ComMethodSel from "@/components/auth/Registration/ComMethodSel";
import DatePickerCom from "@/components/auth/Registration/DatePickerCom";
type comMethodDataType = {
  id: number;
  title: string;
};

const comMethodData: comMethodDataType[] = [
  {
    id: 0,
    title: "No",
  },
  {
    id: 1,
    title: "Yes",
  },
];
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [selectedComMethodID, setComMethodId] = useState<number>();
  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_3.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] absolute">
          <BackBtn onClicked={() => router.push("/Registration/8")} />
        </div>
        <ProgressStatusBar completeness={9} hasBack={true} />
        <OptionalLbl />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="px-8 mx-auto mt-8 sm:w-full"
        >
          <div className="text-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Start Date and Duration
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-6 mx-7">
              &nbsp;&nbsp;&nbsp; When would you like the senior home care
              services to begin? You may also choose your preferred payment
              method for the care services. Adding a debit card on file is
              optional, and rest assured, you will not be charged until you hire
              and approve working hours for the care services
            </div>
          </div>
          <div>
            <div className="text-base text-distlineColor font-arial font-normal mt-6 mx-7">
              Set up when you would like to start
            </div>
            <div className="mt-6 grid grid-cols-2 gap-[18px] wh-10">
              <div><DatePickerCom title="Desired Start Date"/></div>
              <div><DatePickerCom title="Desired End Date (optional)"/></div>
            </div>
          </div>
          <div className="text-center text-base text-distlineColor font-arial font-normal mt-8 mx-[58px]">
            Please indicate if there is an estimated duration or end date for the care services required.
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-auto">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/Registration/10")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;

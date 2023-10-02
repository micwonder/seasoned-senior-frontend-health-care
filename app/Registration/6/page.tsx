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

type comMethodDataType = {
  id: number;
  title: string;
};

const comMethodData: comMethodDataType[] = [
  {
    id: 0,
    title: "Phone call",
  },
  {
    id: 1,
    title: "Text message",
  },
  {
    id: 2,
    title: "E-mail",
  },
  {
    id: 3,
    title: "In person Meetings",
  },
  {
    id: 4,
    title: "Virtual Meeting",
  },
];
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [selectedComMethodID, setComMethodId] = useState<number>(1);
  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_3.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] absolute">
          <BackBtn onClicked={() => router.push("/Registration/5")} />
        </div>
        <ProgressStatusBar completeness={6} hasBack={true} />
        <OptionalLbl />
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div
            className="text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Communication and Family Involvement
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4 mx-7">
              &nbsp;&nbsp;&nbsp; How would you prefer to stay informed about the
              senior's well-being and care updates? (Choose one or specify any
              additional preferences)
            </div>
            <div
              className="text-base text-textdarkColor font-arial font-bold mt-6"
              style={{ width: "max-content" }}
            >
              Choose preferred method of communication
              <div className="mt-6">
                {comMethodData.map((item, index) => (
                  <ComMethodSel
                    key={index.toString()}
                    title={item.title}
                    status={item.id === selectedComMethodID ? true : false}
                    onClick={(e) => {
                      if (
                        e.type === "click" &&
                        e.clientX !== 0 &&
                        e.clientY !== 0
                      ) {
                        setComMethodId(item.id);
                      }
                    }}
                  />
                ))}
                <div className="mt-5 flex justify-between items-center border border-distlineColor rounded-md h-10 p-6 cursor-pointer">
                  <p className="text-sm font-arial font-normal leading-5 text-textdarkColor">
                    Others{" "}
                    <span className=" text-distlineColor">
                      {" "}
                      (Please specify){" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-auto">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/Registration/7")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;

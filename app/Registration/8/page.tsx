"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Children, useState } from "react";

import WithRightBG from "@/components/auth/WithRightBG";
import LogoImg from "@/components/auth/LogoImg";
import ProgressStatusBar from "@/components/auth/Registration/ProgressStatusBar";
import InputField from "@/components/auth/Registration/InputField";
import SaveExitBtn from "@/components/auth/Registration/SaveExitBtn";
import ContinueBtn from "@/components/auth/Registration/ContinueBtn";
import GenderSelection from "@/components/auth/Registration/GenderSelection";
import Relationship from "@/components/auth/Registration/RelationshipSelection";
import BackBtn from "@/components/auth/Registration/BackBtn";
import OptionalLbl from "@/components/auth/Registration/OptionalLbl";
import DaysOfWeekCom from "@/components/auth/Registration/DaysOfWeekCom";
import TimeEntryEditor from "@/components/auth/Registration/TimeEntryEditor";

const Login = () => {
  const router = useRouter();
  const [isYourself, setIsYourself] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [relationship, setRelationship] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [emergencyName, setEmergencyName] = useState<string>("");
  const [emergencyAddress, setEmergencyAddress] = useState<string>("");
  const [emergencyMail, setEmergencyMail] = useState<string>("");
  const [emergencyPhone, setEmergencyPhone] = useState<string>("");
  const [formIndex, setFormIndex] = useState<number>(1);

  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_1.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] absolute">
          <BackBtn onClicked={() => router.push("/Registration/7")} />
        </div>
        <ProgressStatusBar completeness={8} hasBack={true} />
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
            Caregiver Schedule
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4">
              &nbsp;&nbsp;&nbsp; What is your preferred care schedule? (Please specify days of the week, hours per day, and any specific timing requirements)
            </div>
            <div className="text-base text-textdarkColor font-arial font-bold mt-6">
              Set up your schedule
            </div>
            <div style={{ width: "60%" }}>
              <div className="w-full mt-6 grid gap-[14px] grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
                <DaysOfWeekCom />
                <InputField
                  type="text"
                  title="Hours per Day"
                  placholder="3hrs"
                  value={days}
                  handleChange={setDays}
                />
              </div>
              <div
                style={{ textAlign: "left" }}
                className="text-xs text-distlineColor font-arial mt-6"
              >
                Set up your schedule
              </div>
              <div
                style={{ textAlign: "left" }}
                className="text-xs text-primary font-arial mt-[9px]"
              >
                Customize time
              </div>
              <TimeEntryEditor />
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-auto ">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/Registration/9")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;

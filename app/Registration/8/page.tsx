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
import Relationship from "@/components/auth/Registration/RelationshipSelection";
import BackBtn from "@/components/auth/Registration/BackBtn";
import OptionalLbl from "@/components/auth/Registration/OptionalLbl";
import TimeEntryEditor from "@/components/auth/Registration/TimeEntryEditor";
import TimeEntryContext from "@/contexts/TimeEntryContext";
import CustomSelection from "@/components/auth/Registration/CustomSelection";
import CheckMarkSelection from "@/components/auth/Registration/CheckMarkSelection";

interface Time {
  hour: string;
  minute: string;
}

const hoursPerDayItems = [
  "5 hrs",
  "6 hrs",
  "7 hrs",
  "8 hrs",
  "9 hrs",
  "10 hrs",
  "11 hrs",
  "12 hrs",
  "13 hrs",
  "14 hrs",
  "15 hrs",
  "16 hrs",
  "17 hrs",
  "18 hrs",
  "19 hrs",
  "20 hrs",
  "21 hrs",
  "22 hrs",
  "23 hrs",
  "24 hrs",
];

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

  const [dayOfWeek, setDayOfWeek] = useState<string>("");
  const [timeFrom, setTimeFrom] = useState<string>("");
  const [timeTo, setTimeTo] = useState<string>("");

  const contextValue = {
    dayOfWeek,
    setDayOfWeek,
    timeFrom,
    setTimeFrom,
    timeTo,
    setTimeTo,
  };


  return (
    <TimeEntryContext.Provider value={contextValue}>
      <WithRightBG imgpathname="/images/registration_img_8.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] fixed">
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
              Care Schedule
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4">
              &nbsp;&nbsp;&nbsp; What is your preferred care schedule? (Please
              specify days of the week, hours per day, and any specific timing
              requirements)
            </div>
            <div className="text-base text-textdarkColor font-arial font-bold mt-6">
              Set up your schedule
            </div>
            <div className="text-left" style={{ width: "60%" }}>
              <div className="w-full mt-6 grid gap-[14px] grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
                <CheckMarkSelection
                  name="Days of the Week"
                  label="Select days"
                  items={[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ]}
                />
                {/* <InputField
                  type="text"
                  title="Hours per Day"
                  placholder="3hrs"
                  value={days}
                  handleChange={setDays}
                /> */}
                <CustomSelection
                  label="5 hrs"
                  name="Hours per Day"
                  items={hoursPerDayItems}
                />
              </div>
              <div
                style={{ textAlign: "left" }}
                className="text-xs text-distlineColor font-arial mt-6"
              >
                Set up your schedule
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
    </TimeEntryContext.Provider>
  );
};

export default Login;

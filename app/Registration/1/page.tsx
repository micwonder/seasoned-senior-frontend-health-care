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
import DatePickerCom from "@/components/auth/Registration/DatePickerCom";
import CustomSelection from "@/components/auth/Registration/CustomSelection";

const Login = () => {
  const router = useRouter();
  const [isYourself, setIsYourself] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [relationship, setRelationship] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [emergencyName, setEmergencyName] = useState<string>("");
  const [emergencyAddress, setEmergencyAddress] = useState<string>("");
  const [emergencyMail, setEmergencyMail] = useState<string>("");
  const [emergencyPhone, setEmergencyPhone] = useState<string>("");
  const [formIndex, setFormIndex] = useState<number>(1);

  const genderItems = ["Prefer not to say", "Male", "Female"];
  const relationshipItems = ["Son", "Daughter", "Wife", "Brother", "Family friend", "Guardian", "Manger", "Others"];

  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_1.png">
        <LogoImg onClicked={() => router.push("/")} />
        <ProgressStatusBar completeness={1} hasBack={false} />
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div className="text-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Personal Information
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4">
              Information about senior looking for care
            </div>
            <div className="flex justify-center  mt-6">
              <div className=" text-xs text-textdarkColor font-arial leading-normal">
                {" "} 
                Are you filling this out for{" "}
              </div>
              <div className="flex items-center ml-2">
                <input
                  id="Yourself"
                  type="radio"
                  value=""
                  name="role-radio"
                  className="accent-[#CB5A6F] w-4 h-4"
                  onChange={() => setIsYourself(!isYourself)}
                />
                <label className="ml-2 text-xs text-distlineColor dark:text-gray-300 font-arial">
                  Yourself
                </label>
              </div>
              <div className="flex items-center ml-4">
                <input
                  id="Somebody"
                  type="radio"
                  value=""
                  name="role-radio"
                  className="accent-[#CB5A6F] w-4 h-4"
                  onChange={() => setIsYourself(!isYourself)}
                />
                <label className="ml-2 text-xs text-distlineColor dark:text-gray-300 font-arial">
                  Somebody
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5 pl-8 mt-5" onFocus={() => setFormIndex(1)}>
          <div className="flex items-center gap-x-2">
            <span
              className={`left-[7px] top-[38px] w-8 h-8 border border-1 ${
                formIndex == 1
                  ? "bg-textdarkColor text-sectionBgColor border-textdarkColor"
                  : "bg-white text-distlineColor border-distlineColor"
              } rounded-full flex justify-center items-center text-center`}
            >
              1
            </span>
            <label>General Information</label>
          </div>
          <div className="mt-5 ml-4 px-7 pb-7 border-l-2 border-distlineColor">
            <InputField
              type="text"
              title="Full Name of Senior"
              placholder="Enter Full Name"
              value={name}
              handleChange={setName}
            />
            <div className="grid grid-cols-2 mt-8 gap-7 items-center sm:grid-cols-1">
              <DatePickerCom title="Desired Start Date" />
              <div><CustomSelection name="Gender" label="Select" items={genderItems} /></div>
            </div>
            <div className="mt-7">
              <InputField
                type="text"
                title="Address"
                placholder="Enter Address"
                value={address}
                handleChange={setAddress}
              />
            </div>
            {!isYourself && (
              <div className="mt-7">
                <CustomSelection name="Relationship" label="Choose an option" items={relationshipItems} />
              </div>
            )}
            <div className="mt-7">
              <InputField
                type="email"
                title="Email (optional)"
                placholder="Enter you Email"
                value={mail}
                handleChange={setMail}
              />
            </div>
            <div className="mt-7">
              <InputField
                type="text"
                title="Phone (optional)"
                placholder="7465165196"
                value={phone}
                handleChange={setPhone}
              />
            </div>
          </div>
        </div>
        <div className="mx-5 pl-8 mt-5" onFocus={() => setFormIndex(2)}>
          <div className="flex items-center gap-x-2">
            <span
              className={`left-[7px] top-[38px] w-8 h-8 border border-1 ${
                formIndex == 2
                  ? "bg-textdarkColor text-sectionBgColor border-textdarkColor"
                  : "bg-white text-distlineColor border-distlineColor"
              } rounded-full flex justify-center items-center text-center`}
            >
              2
            </span>
            <label>Emergency Contact (optional)</label>
          </div>
          <div className="mt-5 ml-4 px-7 pb-7 border-l-2 border-distlineColor">
            <InputField
              type="text"
              title="Full Name of Contract"
              placholder="Enter Full name"
              value={emergencyName}
              handleChange={setEmergencyName}
            />
            <div className="mt-7">
              <InputField
                type="text"
                title="Address"
                placholder="Enter Address"
                value={emergencyAddress}
                handleChange={setEmergencyAddress}
              />
            </div>
            <div className="mt-7">
              <InputField
                type="email"
                title="Email (optional)"
                placholder="Enter you Email"
                value={emergencyMail}
                handleChange={setEmergencyMail}
              />
            </div>
            <div className="mt-7">
              <InputField
                type="text"
                title="Phone (optional)"
                placholder="7465165196"
                value={emergencyPhone}
                handleChange={setEmergencyPhone}
              />
            </div>
          </div>
        </div>
        <div className="mx-[90px] text-primary text-base font-arial font-bold">
          Add another Emergency Contact +
        </div>
        <div className="flex justify-between mx-8 mt-2 ">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/Registration/2")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;

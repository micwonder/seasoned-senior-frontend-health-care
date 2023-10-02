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
import TimePickerCom from "@/components/auth/Registration/TimePickerCom";
import BackBtn from "@/components/auth/Registration/BackBtn";

const Login = () => {
  type Dates = {
    date1: string;
    date2: string;
    date3: string;
    date4: string;
    date5: string;
    date6: string;
    date7: string;
    date8: string;
    date9: string;
    date10: string;
  };
  const router = useRouter();
  const [dates, setDates] = useState<Dates>({
    date1: "",
    date2: "",
    date3: "",
    date4: "",
    date5: "",
    date6: "",
    date7: "",
    date8: "",
    date9: "",
    date10: "",
  });

  const handleSetDates =
    (name: keyof Dates) =>
    (value: string): void => {
      setDates((prevDates) => ({
        ...prevDates,
        [name]: value,
      }));
    };

  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_1.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] absolute">
          <BackBtn onClicked={() => router.push("/Registration/4")} />
        </div>
        <ProgressStatusBar completeness={5} hasBack={true} />
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div className="text-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Caregiver Availability
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4 mx-7">
              Please share your availability and preferred caregiving schedule
              to help us match you with suitable opportunities. Your input will
              help us create a flexible and personalized caregiving experience
              for you and our clients.
            </div>
          </div>
        </div>
        <div className="mx-5 pl-8 mt-6">
          <div className="text-center text-base font-bold font-arial text-textdarkColor">
            <label>Tell us about the senior routine and schedule</label>
          </div>
          <div className="mt-6 ml-4 px-7 pb-7">
            <p className=" text-textdarkColor text-base font-normal font-arial ml-2">
              Waking Time
            </p>
            <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
              <TimePickerCom title="Preferred waking time" />
              <div className="col-span-2">
                <InputField
                  type="text"
                  title="Note"
                  placholder=""
                  value={dates.date1}
                  handleChange={handleSetDates("date1")}
                />
              </div>
            </div>

            <div className="mt-4">
              <p className=" text-textdarkColor text-base font-normal font-arial ml-2">
                Sleeping Time
              </p>
              <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
                <TimePickerCom title="Preferred sleeping time" />
                <div className="col-span-2">
                  <InputField
                    type="text"
                    title="Note"
                    placholder=""
                    value={dates.date2}
                    handleChange={handleSetDates("date2")}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className=" text-textdarkColor text-base font-normal font-arial ml-2">
                Meal Times
              </p>
              <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
                <TimePickerCom title="Breakfast time" />
                <TimePickerCom title="Lunch time" />
                <TimePickerCom title="Dinner time" />
              </div>
              <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
                <TimePickerCom title="Snack time" />
                <div className=" col-span-2">
                  <InputField
                    type="text"
                    title="Note"
                    placholder=""
                    value={dates.date3}
                    handleChange={handleSetDates("date3")}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className=" text-textdarkColor text-base font-normal font-arial ml-2">
                Activities and Routines
              </p>
              <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
                <InputField
                  type="text"
                  title="Activity/Routine 1"
                  placholder="Name of Activity"
                  value={dates.date4}
                  handleChange={handleSetDates("date4")}
                />
                <InputField
                  type="text"
                  title="Frequency"
                  placholder="Daily/weekly"
                  value={dates.date5}
                  handleChange={handleSetDates("date5")}
                />
                <TimePickerCom title="Time of the day" />
              </div>
              <InputField
                type="text"
                title="Note"
                placholder="Leave a detailed note"
                value={dates.date6}
                handleChange={handleSetDates("date6")}
              />
              <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
                <InputField
                  type="text"
                  title="Activity/Routine 2"
                  placholder="Name of Activity"
                  value={dates.date7}
                  handleChange={handleSetDates("date7")}
                />
                <InputField
                  type="text"
                  title="Frequency"
                  placholder="Daily/weekly"
                  value={dates.date8}
                  handleChange={handleSetDates("date8")}
                />
                <TimePickerCom title="Time of the day" />
              </div>
              <InputField
                type="text"
                title="Note"
                placholder="Leave a detailed note"
                value={dates.date9}
                handleChange={handleSetDates("date9")}
              />
              <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
                <TimePickerCom title="Snack time" />
                <div className=" col-span-2">
                  <InputField
                    type="text"
                    title="Note"
                    placholder=""
                    value={dates.date10}
                    handleChange={handleSetDates("date10")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-auto ">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/Registration/6")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;

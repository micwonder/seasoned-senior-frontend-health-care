"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/auth/WithRightBG";
import LogoImg from "@/components/auth/LogoImg";
import OptionalLbl from "@/components/auth/Registration/OptionalLbl";
import ProgressStatusBar from "@/components/auth/Registration/ProgressStatusBar";
import SaveExitBtn from "@/components/auth/Registration/SaveExitBtn";
import ContinueBtn from "@/components/auth/Registration/ContinueBtn";
import BackBtn from "@/components/auth/Registration/BackBtn";
import DatePickerCom from "@/components/auth/Registration/DatePickerCom";
import CustomSelection from "@/components/auth/Registration/CustomSelection";
type comMethodDataType = {
  id: number;
  title: string;
};

const selectDaysItems = [
  "1 day",
  "2 days",
  "3 days",
  "4 days",
  "5 days",
  "6 days",
  "7 days",
  "8 days",
  "9 days",
  "10 days",
  "11 days",
  "12 days",
  "13 days",
  "14 days",
  "15 days",
  "16 days",
  "17 days",
  "18 days",
  "19 days",
  "20 days",
  "21 days",
  "22 days",
  "23 days",
  "24 days",
  "25 days",
  "26 days",
  "27 days",
  "28 days",
  "29 days",
  "30 days",
];
const selectWeekItems = ["1 week", "2 weeks", "3 weeks", "4 weeks"];
const selectMonthItems = [
  "1 month",
  "2 months",
  "3 months",
  "4 months",
  "5 months",
  "6 months",
  "7 months",
  "8 months",
  "9 months",
  "10 months",
  "11 months",
  "12 months",
];

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

const StartDateandDuration = () => {
  const router = useRouter();

  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_10.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] absolute">
          <BackBtn onClicked={() => router.push("/Registration/9")} />
        </div>
        <ProgressStatusBar completeness={10} hasBack={true} />
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
              <div>
                <DatePickerCom title="Desired Start Date" />
              </div>
              <div className="font-arial">
                <DatePickerCom title="Desired End Date (optional)" />
                <div
                  className="text-distlineColor text-sm"
                  style={{ display: "flex", alignItems: "self-end" }}
                >
                  <input
                    type="checkbox"
                    className="mt-2 accent-[#CB5A6F] w-5 h-5 text-textdarkColor bg-gray-100 border-gray-300 "
                    name="checkbox"
                    // checked={status}
                    onChange={(event) => {
                      setShow(!event.target.checked);
                    }}
                  />
                  &nbsp;Ongoing
                </div>
              </div>
            </div>
          </div>
          <div
            style={
              show
                ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }
                : { display: "none" }
            }
          >
            <div className="text-center text-sm font-bold text-distlineColor font-arial mt-8 mx-[58px]">
              Please indicate if there is an estimated duration or end date for
              the care services required.
            </div>
            <div className="mt-4 w-[70%] grid grid-cols-3 gap-[14px] xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-1">
              <CustomSelection
                name="Days"
                label="1 day"
                items={selectDaysItems}
              />
              <CustomSelection
                name="Week"
                label="3 weeks"
                items={selectWeekItems}
              />
              <CustomSelection
                name="Month"
                label="5 months"
                items={selectMonthItems}
              />
            </div>
          </div>
          <div className="text-center text-base text-textdarkColor font-arial font-normal mt-4">
            Add payment method (optional)
          </div>
          <div className="cursor-pointer text-[18px] bg-primary text-white rounded-lg py-4 w-[50%] text-center">
            ADD PAYMENT METHOD
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-auto">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/Registration/11")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default StartDateandDuration;

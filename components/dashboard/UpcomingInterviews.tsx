import React, { useEffect, useState } from "react";
import CollapseIcon from "@/public/icons/collapse_down";
import { IconButton } from "@mui/material";
import HorizontalLine from "@/public/icons/line_horizon";
import UpcomingInterviewCard from "./UpcomingInterviewCard";

const CAREMANAGER = 1;
const CAREGIVER = 2;

const interviewItems = [
  {
    time: "11:00 AM",
    guest: null,
  },
  {
    time: "11:30 AM",
    guest: [CAREMANAGER, CAREGIVER, CAREMANAGER, CAREGIVER],
  },
  {
    time: "12:00 PM",
    guest: null,
  },
  {
    time: "12:30 PM",
    guest: [CAREGIVER, CAREMANAGER],
  },
  {
    time: "01:00 PM",
    guest: null,
  },
  {
    time: "01:30 PM",
    guest: null,
  },
  {
    time: "02:00 PM",
    guest: null,
  },
  {
    time: "02:30 PM",
    guest: null,
  },
  {
    time: "03:00 PM",
    guest: null,
  },
];

const UpcomingInterviews = () => {
  const [interviewDate, setInterviewDate] = useState<Date>(new Date());

  const isToday =
    interviewDate.toLocaleDateString("en-GB", {
      month: "long",
      day: "numeric",
    }) ===
    new Date().toLocaleDateString("en-GB", {
      month: "long",
      day: "numeric",
    });

  const handleIncreaseDate = (num: number) => {
    const newDate = new Date(interviewDate);
    newDate.setDate(interviewDate.getDate() + num);
    setInterviewDate(newDate);
  };

  return (
    <div className="w-[670px] bg-white flex flex-col text-textdarkColor shadow-sm rounded-xl h-[500px] overflow-hidden">
      <div className="mt-[17px] ml-[12px] text-[16px] font-bold">
        Upcoming Interviews
      </div>
      <div className="mx-[27px] flex flex-col items-center">
        <div className="mt-[30px] px-2 flex flex-row text-[20px] w-full justify-between">
          <div className="flex flex-row items-center">
            <div className="font-bold w-[60px]">
              {interviewDate.toLocaleDateString("en-GB", {
                month: "long",
                day: "numeric",
              }) ===
              new Date().toLocaleDateString("en-GB", {
                month: "long",
                day: "numeric",
              })
                ? "Today,"
                : ""}
            </div>
            &nbsp;
            <div className="w-[100px]">
              {interviewDate.toLocaleDateString("en-GB", {
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <div className="flex flex-row">
            <IconButton
              size="small"
              disabled={isToday}
              onClick={() => handleIncreaseDate(-1)}
            >
              <CollapseIcon
                rotate={90}
                color={isToday ? "#C4C4C44D" : "#282828"}
              />
            </IconButton>
            <IconButton size="small" onClick={() => handleIncreaseDate(1)}>
              <CollapseIcon
                rotate={-90}
                color={
                  interviewDate === interviewDate ? "#282828" : "#C4C4C44D"
                }
              />
            </IconButton>
          </div>
        </div>
        <HorizontalLine strokeWidth={1.5} width={600} color="#C4C4C4" />
        {interviewItems.map((item, index) => {
          return (
            <div
              className="flex flex-row items-center"
              key={`intv_items_${index}`}
            >
              <div className={!item.guest ? "mb-[20px] mt-[5px]" : ""}>
                {item.time}
              </div>
              {!item.guest ? (
                <HorizontalLine
                  strokeWidth={2.22345}
                  width={493}
                  color="#F6F6F6"
                  className="ml-[18px] mb-[20px] mt-[5px]"
                />
              ) : (
                <UpcomingInterviewCard guest={item.guest} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingInterviews;

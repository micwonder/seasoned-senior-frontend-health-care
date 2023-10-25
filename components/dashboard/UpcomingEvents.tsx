import { Button } from "@mui/material";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col w-[410px] shadow-sm rounded-xl bg-white text-textdarkColor text-[12px] relative">
      <Button className="text-[14px] text-primary absolute right-[24px] top-[34px]">
        View all
      </Button>
      <div className="mt-[17px] ml-[12px] text-[16px] font-bold">
        Upcoming Events
      </div>
    </div>
  );
};

export default UpcomingEvents;

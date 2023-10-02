import { useState } from "react";
import DaysOfWeekCom from "./DaysOfWeekCom";
import InputField from "./InputField";

const TimeEntryEditor = () => {
  const [days, setDays] = useState<string>("");
  const [timeTo, setTimeTo] = useState<string>("");
  const [timeFrom, setTimeFrom] = useState<string>("");
  return (
    <div className="text-textdarkColor font-arial border border-[#F6F6F6]">
      <div className="flex justify-between ">
        <div className="text-left w-full text-[12px] leading-[18px] bg-[#F6F6F6] pt-[7px] pr-[12px] pb-[7px] pl-[13px]">
          Edit time entry
        </div>
        <div className="text-right w-full text-[12px] leading-[18px] bg-[#F6F6F6] pt-[7px] pr-[12px] pb-[7px] pl-[13px]">
          &#10006;
        </div>
      </div>
      <div className="pr-[34px] pb-[9px] pl-[34px]" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
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
        <div className="w-full mt-2 grid gap-[14px] grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
          <InputField
            type="text"
            title="Time"
            placholder="From"
            value={timeFrom}
            handleChange={setTimeFrom}
          />
          <InputField
            type="text"
            title="Time"
            placholder="To"
            value={timeTo}
            handleChange={setTimeTo}
          />
        </div>
        <div className="w-[60%] rounded-md mt-6 p-4 text-[14px] bg-borderGreyColor">
          Save
        </div>
      </div>
    </div>
  );
};

export default TimeEntryEditor;

import { ChangeEvent, useContext, useState } from "react";
import InputField from "./InputField";
import TimeEntryContext from "@/contexts/TimeEntryContext";
import CustomSelection from "./CustomSelection";

const TimeEntryEditor = () => {
  const { dayOfWeek, setDayOfWeek } = useContext(TimeEntryContext);
  const { timeTo, setTimeTo } = useContext(TimeEntryContext);
  const { timeFrom, setTimeFrom } = useContext(TimeEntryContext);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSetTimeTo = (e: React.FormEvent<HTMLInputElement>) => {
    console.log("Helo");
    setTimeTo(e.currentTarget.value);
  };
  const handleSetDayOfWeek = (e: React.FormEvent<HTMLInputElement>) => {
    console.log("Helo");
    setDayOfWeek(e.currentTarget.value);
  };
  const handleSetTimeFrom = (e: React.FormEvent<HTMLInputElement>) => {
    console.log("Helo");
    setTimeFrom(e.currentTarget.value);
  };

  const buttonClassName = `block  ${
    isDisabled
      ? "bg-[#f6f6f6]"
      : "bg-primaryHover border-primary focus:bg-primaryDisabled"
  } text-primary rounded-lg px-4 py-3 mt-4 mb-9 text-white font-arial border-2 w-[40%] font-bold`;

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
      <div
        className="pr-[34px] pb-[9px] pl-[34px]"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="w-full mt-6 grid gap-[14px] grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
          <CustomSelection
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
          <InputField
            type="text"
            title="Hours per Day"
            placholder="3hrs"
            value=""
            handleChange={() => {}}
          />
        </div>
        <div className="w-full mt-2 grid gap-[14px] grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
          <InputField
            type="text"
            title="Time"
            placholder="From"
            value={timeFrom}
            handleChange={handleSetTimeFrom}
          />
          <InputField
            type="text"
            title="Time"
            placholder="To"
            value={timeTo}
            handleChange={handleSetTimeTo}
          />
        </div>
        {/* <div className="w-[60%] rounded-md mt-6 p-4 text-[14px] bg-borderGreyColor">
          Save
        </div> */}

        <button
          type="submit"
          disabled={isDisabled ? true : false}
          className={buttonClassName}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TimeEntryEditor;

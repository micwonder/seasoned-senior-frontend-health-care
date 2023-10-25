import React from "react";

const activeTimesheetItems = [
  {
    period: "Aug 03 - Aug 23",
    title:
      "Caregiver services include compassionate support with personal care and meticulous medication",
    status: "Current",
    totalHour: "40hr 45min",
    totalAmount: "$3,460",
  },
  {
    period: "Aug 03 - Aug 23",
    title:
      "Caregiver services include compassionate support with personal care and meticulous medication",
    status: "Current",
    totalHour: "40hr 45min",
    totalAmount: "$3,460",
  },
];

const ActiveTimesheets = () => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.backgroundColor = "#FFF2F588";
    event.currentTarget.style.paddingLeft = "21px";
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event.currentTarget.style.backgroundColor = index % 2 ? "" : "#FAFAFB";
    event.currentTarget.style.paddingLeft = "20px";
  };

  return (
    <div className="bg-white flex flex-col w-[1100px] shadow-sm rounded-xl">
      <div className="mt-[20px] ml-3 text-[16px] text-textdarkColor font-bold">
        Active Timesheets
      </div>
      <div className="mx-5 mb-[15px] text-[12px] text-textdarkColor flex flex-col">
        <div className="px-5 flex flex-row h-[50px] items-center gap-6">
          <div className="w-[12%]"> </div>
          <div className="w-[58%]"> </div>
          <div className="w-[10%] ">Status</div>
          <div className="w-[10%] ">Total Hour</div>
          <div className="w-[10%] ">Total Amount</div>
        </div>
        <div className="flex flex-col cursor-pointer">
          {activeTimesheetItems.map((item, index) => {
            return (
              <div
                className="px-5 flex flex-row h-[50px] items-center gap-6 rounded-md"
                style={{
                  backgroundColor: `${index % 2 ? "" : "FAFAFB"}`,
                }}
                key={`active_timesheet_item_${index}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={(event) => handleMouseLeave(event, index)}
              >
                <div className="w-[12%]">{item.period}</div>
                <div className="w-[58%]">{item.title}</div>
                <div className="w-[10%] text-[#EFBB1A]">{item.status}</div>
                <div className="w-[10%]">{item.totalHour}</div>
                <div className="w-[10%] text-[#30A64A]">{item.totalAmount}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActiveTimesheets;

import React from "react";

const activeTimesheetItems = [
  {
    title:
      "Caregiver services include compassionate support with personal care and meticulous medication",
    status: "Current",
    totalHour: "40hr 45min",
    totalAmount: "$3,460",
  },
];

const ActiveTimesheets = () => {
  return (
    <div className="bg-white flex flex-col w-[1060px] shadow-sm rounded-xl">
      <div className="mt-[20px] ml-3 text-[16px] text-textdarkColor font-bold">
        Active Timesheets
      </div>
      <div className="text-[12px] text-textdarkColor flex flex-col">
        <div className="flex flex-row h-[50px]">
          <div className="w-[70%]"> </div>
          <div className="w-[10%] ">Status</div>
          <div className="w-[10%] ">Total Hour</div>
          <div className="w-[10%] ">Total Amount</div>
        </div>
        {/* <div className="flex flex-col cursor-pointer">
          {activeTimesheetItems.map((item, index) => {
            return (
              <div
                className="flex flex-row h-[50px] items-center"
                style={{
                  backgroundColor: `${index % 2 ? "" : "FAFAFB"}`,
                }}
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={(event)=>handleMouseLeave(event, index)}
              >
                <div>{item.title}</div>
                <div>{item.status}</div>
                <div>{item.totalHour}</div>
                <div>{item.totalAmount}</div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default ActiveTimesheets;

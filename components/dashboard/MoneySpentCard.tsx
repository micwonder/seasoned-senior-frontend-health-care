import React from "react";
import CustomizedLineChart from "./CustomizedLineChart";

const MoneySpentCard = () => {
  return (
    <div className="bg-white flex flex-row w-[670px] shadow-sm rounded-xl">
      <div className="mt-2 w-[160px] h-[274px] flex flex-col justify-around">
        <div className="pl-3 font-bold text-[16px] text-textdarkColor">
          Money spent
        </div>
        <div className="flex flex-col items-start gap-[14px] p-2">
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex flex-col items-start gap-[8px] font-bold p-[5px]">
              <span className="text-[10px] text-distlineColor">
                SPENT THIS MONTH
              </span>
              <span className="text-[16px] text-textdarkColor">$2,980.00</span>
            </div>
          </div>
          <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }} />

          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex flex-col items-start gap-[8px] font-bold p-[5px]">
              <span className="text-[10px] text-distlineColor">
                SPENT LAST MONTH
              </span>
              <span className="text-[16px] text-textdarkColor">$1,980.00</span>
            </div>
          </div>
          <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }} />

          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex flex-col items-start gap-[8px] font-bold p-[5px]">
              <span className="text-[10px] text-distlineColor">
                ALL-TIME SPENDING
              </span>
              <span className="text-[16px] text-textdarkColor">$11,980.00</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <CustomizedLineChart />
    </div>
  );
};

export default MoneySpentCard;

import React, { MouseEventHandler } from "react";
import Image from "next/image";
import sm_sm_avatar from "@/public/avatars/sample.png";
import ClockIcon from "@/public/icons/clock_icon";

const upcomingVisitItems = [
  {
    name: "Kenedy McAnthony",
    visitDateTime: "Mon, Aug 30, 09:00am - 3:30pm",
  },
  {
    name: "Kenedy McAnthony",
    visitDateTime: "Mon, Aug 30, 09:00am - 3:30pm",
  },
  {
    name: "Kenedy McAnthony",
    visitDateTime: "Mon, Aug 30, 09:00am - 3:30pm",
  },
  {
    name: "Kenedy McAnthony",
    visitDateTime: "Mon, Aug 30, 09:00am - 3:30pm",
  },
  {
    name: "Kenedy McAnthony",
    visitDateTime: "Mon, Aug 30, 09:00am - 3:30pm",
  },
];

const UpcomingVisitsCard = () => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.backgroundColor = "#FFF2F588";
    event.currentTarget.style.paddingLeft = "14px";
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event.currentTarget.style.backgroundColor = index % 2 ? "" : "#FAFAFB";
    event.currentTarget.style.paddingLeft = "13px";
  };

  return (
    <div className="flex flex-col p-[10px]">
      <div className="mb-[22px] text-[16px] text-textdarkColor font-bold">
        Upcoming Visits
      </div>

      <div className="flex flex-col gap-[9px] cursor-pointer">
        {upcomingVisitItems.map((item, index) => {
          return (
            <div
              key={`upcoming_visit_items_${index}`}
              className="py-2 px-[13px] flex flex-row gap-[16px] items-center rounded-md"
              style={{ backgroundColor: `${index % 2 ? "" : "#FAFAFB"}` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={(event) => handleMouseLeave(event, index)}
            >
              <Image
                alt={item.name}
                src={sm_sm_avatar}
                width={64}
                style={{
                  height: "auto",
                  border: "2px solid rgba(255, 114, 140, 0.99)",
                }}
                className="rounded-xl"
              />
              <div className="flex flex-col gap-[6px]">
                <div className="text-[16px] font-bold">{item.name}</div>
                <div className="flex flex-row items-center">
                  <ClockIcon color="#292D32" width={13} height={13} />
                  <div className="ml-2 text-[12px] text-[#8C8C8C]">
                    {item.visitDateTime}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingVisitsCard;

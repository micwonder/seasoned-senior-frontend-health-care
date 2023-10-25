import React from "react";
import Image from "next/image";
import VerticalLine from "@/public/icons/line_vertical";
import sm_avatar from "@/public/avatars/sample.png";

const sampleLineColors = ["#4285F4", "#30A64A", "#DC0035", "#766D5A"];

const EventPreviewItem: React.FC<{
  item: {
    date: Date;
    name: string;
    content: string;
    period: string;
    guest: number[];
  };
  index: number;
}> = ({ item, index }) => {
  const formatDate = (date: Date): { month: string; day: string } => {
    const today = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return { month: "Today", day: formattedDate.split(" ")[1] };
    } else {
      const [month, day] = formattedDate.split(" ");
      return { month: month, day: day };
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.backgroundColor = "#FFF2F588";
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.backgroundColor = "#FFF";
  };

  return (
    <div
      className="flex flex-row px-[24px] gap-[5px] items-center h-[120px] rounded-md"
      key={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(event) => handleMouseLeave(event)}
    >
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-col w-[8%] text-center">
          <div className="text-[12px]">{formatDate(item.date).month}</div>
          <div className="text-[24px]">{formatDate(item.date).day}</div>
        </div>
        <VerticalLine
          className="w-[3%]"
          height={120}
          color={sampleLineColors[index % 4]}
        />
        <div className="flex flex-col justify-start h-[120px]">
          <div className="text-[17px]">{item.name}</div>
          <div className="text-[12px] w-[80%] text-distlineColor line-clamp-3">
            {item.content}
          </div>
          <div className="flex flex-row gap-[50px] items-center">
            <div className="text-[14px]">{item.period}</div>
            <div className="flex flex-row gap-[4px]">
              {item.guest.map(() => {
                return (
                  <Image
                    key={item.name}
                    alt={item.name}
                    src={sm_avatar}
                    width={27}
                    className="rounded-[50%]"
                    style={{ height: "27px" }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPreviewItem;

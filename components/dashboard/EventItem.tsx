import React from "react";
import Image from "next/image";
import VerticalLine from "@/public/icons/line_vertical";
import sm_avatar from "@/public/avatars/sample.png";

const sampleLineColors = ["#4285F4", "#30A64A", "#DC0035", "#766D5A"];

const EventItem: React.FC<{
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
    event.currentTarget.style.paddingLeft = "22px";
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.backgroundColor = "#FFF";
    event.currentTarget.style.paddingLeft = "20px";
  };

  return (
    <div
      className="flex flex-row px-[20px] gap-[5px] rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(event) => handleMouseLeave(event)}
    >
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-[8%] text-center gap-4">
          <div className="text-[12px]">{formatDate(item.date).month}</div>
          <div className="text-[24px]">{formatDate(item.date).day}</div>
        </div>
        <VerticalLine
          className="w-[3%]"
          height={80}
          color={sampleLineColors[index % 4]}
        />
        <div className="flex flex-col g-[8px]">
          <div className="text-[18px]">{item.name}</div>
          <div className="text-[12px] w-[88%] text-textxdarkColor line-clamp-3">
            {item.content}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-[14px]" style={{ width: "max-content" }}>
          {item.period}
        </div>
        <div className="flex flex-row gap-[5px]">
          {item.guest.map((guest_number, guest_index) => {
            return (
              <Image
                key={`event_prev_image_modal_${index}_${guest_index}`}
                alt={item.name}
                src={sm_avatar}
                width={32}
                className="rounded-[50%]"
                style={{ height: "auto" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventItem;

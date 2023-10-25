import React from "react";
import Image, { StaticImageData } from "next/image";
import VerticalLine from "@/public/icons/line_vertical";
import StatusEllipse from "@/public/icons/status_ellipse";
import { Button } from "@mui/material";

const MessagePreviewItem: React.FC<{
  item: {
    date: Date;
    name: string;
    avatar: StaticImageData;
    status: number;
    message: string;
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
    event.currentTarget.style.paddingLeft = "1px";
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.backgroundColor = "#FFF";
    event.currentTarget.style.paddingLeft = "0px";
  };

  return (
    <div
      className="flex flex-row gap-[5px] items-center h-[70px] rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(event) => handleMouseLeave(event)}
    >
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-col w-[5%] text-center">
          <div className="text-[12px]">{formatDate(item.date).month}</div>
          <div className="text-[24px]">{formatDate(item.date).day}</div>
        </div>
        <div className="flex flex-row items-end">
          <Image
            alt={item.name}
            src={item.avatar}
            width={54}
            className="rounded-[50%]"
            style={{ height: "auto" }}
          />
          <div className="ml-[-13px]">
            <StatusEllipse
              color={
                item.status === 2
                  ? "#30A64A"
                  : item.status === 1
                  ? "#EDBB2A"
                  : "#828282"
              }
            />
          </div>
        </div>
        <VerticalLine
          className="w-[1%]"
          height={63}
          color={
            item.status === 2
              ? "#30A64A"
              : item.status === 1
              ? "#EDBB2A"
              : "#828282"
          }
        />
        {/* <div className="flex flex-col w-[100%] overflow-hidden whitespace-nowrap text-overflow-ellipsis"> */}
        <div className="flex flex-col w-[83%] justify-center">
          <div className="text-[16px] font-bold">{item.name}</div>
          <div className="text-[12px] text-distlineColor truncate">
            {item.message}
          </div>
        </div>
      </div>
      <Button className="ml-auto text-[12px] font-bold text-primary w-[5%]">
        Open
      </Button>
    </div>
  );
};

export default MessagePreviewItem;

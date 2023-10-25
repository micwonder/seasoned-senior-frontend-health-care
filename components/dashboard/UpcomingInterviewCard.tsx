import React from "react";
import Image from "next/image";
import sm_sm_avatar from "@/public/avatars/sample.png";
import app_logo from "@/public/icons/app_logo.svg";
import JoinCallIcon from "@/public/icons/join_call_icon";
import { Button, ThemeProvider, createTheme } from "@mui/material";

const guestItems: { [key: number]: string } = {
  1: "Care manager",
  2: "Caregiver",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#CB5A6F",
      dark: "#CB5A6F",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

const UpcomingInterviewCard: React.FC<{ guest: number[] }> = ({ guest }) => {
  return (
    <div
      className="ml-[30px] w-[480px] h-[120px] rounded-md flex flex-row text-[16px] items-center justify-evenly"
      style={{ backgroundColor: "rgba(203, 90, 111, 0.10)" }}
    >
      <div className="rounded-[50%] border-2 border-primary w-[78px] h-[78px] flex flex-col items-center justify-center">
        <Image
          alt="app_logo"
          src={app_logo}
          width={66}
          style={{ height: "auto" }}
        />
      </div>
      <div className="flex flex-col gap-[9px] w-[50%]">
        <div className="font-bold truncate">
          {"Meeting with " +
            guest.map((guestNumber) => guestItems[guestNumber]).join(", ")}
        </div>
        <div className="flex flex-row">
          {guest.map((item, index) => {
            return (
              <Image
                className="rounded-[50%] mr-[-8px]"
                key={`upcoming_intv_image_${index}`}
                alt={item.toString()}
                src={sm_sm_avatar}
                width={38}
                style={{ height: "auto", border: "2px solid white" }}
              />
            );
          })}
          <Image
            className="rounded-[50%]"
            alt="me"
            src={sm_sm_avatar}
            width={38}
            style={{ height: "auto", border: "2px solid white" }}
          />
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <Button className="flex flex-col items-center">
          <JoinCallIcon color="#30A64A" />
          <div className="text-[#30A64A] font-bold">Join Call</div>
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default UpcomingInterviewCard;

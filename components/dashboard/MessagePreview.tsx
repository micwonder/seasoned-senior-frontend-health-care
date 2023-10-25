import React from "react";
import md_avatar from "@/public/avatars/sample.png";
import { ThemeProvider, createTheme } from "@mui/material";
import MessagePreviewItem from "./MessagePreviewItem";

const messageItems = [
  {
    date: new Date("2023-10-24"),
    name: "Benji Flow",
    avatar: md_avatar,
    status: 2,
    message:
      "Thank you for reaching out to me i would like follow through on the schedule,please please let me know yopleaseu will be available for pleasea link up........",
  },
  {
    date: new Date("2023-09-12"),
    name: "Felicia Dumm",
    avatar: md_avatar,
    status: 1,
    message:
      "Thank you for reaching out to me Thank you for reaching out to me i would like follow through on the schedule, please pleasepl   let me know you will be ",
  },
  {
    date: new Date("2023-09-10"),
    name: "Kate Luiz",
    avatar: md_avatar,
    status: 0,
    message:
      "Thank you for reaching out to meT hank you for reaching out to me i would like follow through on the schedule, please let me know you will be available f",
  },
];

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

const MessagePreview = () => {
  return (
    <div className="pt-[17px] pr-[22px] pb-[17px] pl-[15px] bg-white flex flex-col w-[1100px] shadow-sm rounded-xl">
      <div className="text-[16px] text-textdarkColor font-bold">Messages</div>
      <div className="mt-[19px] flex flex-col gap-2 cursor-pointer">
        <ThemeProvider theme={theme}>
          {messageItems.map((item, index) => {
            return (
              <MessagePreviewItem
                item={item}
                index={index}
                key={`message_prev_${index}`}
              />
            );
          })}
        </ThemeProvider>
      </div>
    </div>
  );
};

export default MessagePreview;

import { Button, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import EventPreviewItem from "./EventPreviewItem";

const CAREMANAGER = 1;
const CAREGIVER = 2;

const eventItems = [
  {
    date: new Date("2023-08-14"),
    name: "Event name1",
    content:
      "Information about event or note like for instance, Lorem Ipsum dolor sit amet, metus non eainsl, oosursj.",
    period: "11:30AM - 4:00PM",
    guest: [CAREMANAGER, CAREGIVER, CAREGIVER],
  },
  {
    date: new Date("2023-09-30"),
    name: "Event name2",
    content:
      "Information about event or note like for instance, Lorem Ipsum dolor sit amet, metus non eainsl, oosursj.",
    period: "11:30AM - 4:00PM",
    guest: [CAREMANAGER, CAREGIVER, CAREGIVER],
  },
  {
    date: new Date("2023-11-24"),
    name: "Event name3",
    content:
      "Information about event or note like for instance, Lorem Ipsum dolor sit amet, metus non eainsl, oosursj.",
    period: "11:30AM - 4:00PM",
    guest: [CAREMANAGER, CAREGIVER, CAREGIVER],
  },
  {
    date: new Date("2023-08-14"),
    name: "Event name4",
    content:
      "Information about event or note like for instance, Lorem Ipsum dolor sit amet, metus non eainsl, oosursj.",
    period: "11:30AM - 4:00PM",
    guest: [CAREMANAGER, CAREGIVER, CAREGIVER],
  },
  {
    date: new Date("2023-11-24"),
    name: "Event name3",
    content:
      "Information about event or note like for instance, Lorem Ipsum dolor sit amet, metus non eainsl, oosursj.",
    period: "11:30AM - 4:00PM",
    guest: [CAREMANAGER, CAREGIVER, CAREGIVER],
  },
  {
    date: new Date("2023-08-14"),
    name: "Event name4",
    content:
      "Information about event or note like for instance, Lorem Ipsum dolor sit amet, metus non eainsl, oosursj.",
    period: "11:30AM - 4:00PM",
    guest: [CAREMANAGER, CAREGIVER, CAREGIVER],
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

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col w-[410px] shadow-sm rounded-xl bg-white text-textdarkColor text-[12px] relative h-[500px] overflow-hidden">
      <ThemeProvider theme={theme}>
        <Button className="text-[14px] text-primary absolute right-[24px] top-[34px]">
          View all
        </Button>
      </ThemeProvider>
      <div className="mt-[17px] ml-[12px] text-[16px] font-bold">
        Upcoming Events
      </div>
      <div className="mt-[19px] mx-2 flex flex-col gap-2 cursor-pointer">
        {eventItems.map((item, index) => {
          return <EventPreviewItem item={item} index={index} key={item.name} />;
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;

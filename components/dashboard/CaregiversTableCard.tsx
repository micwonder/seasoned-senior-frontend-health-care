import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import sm_avatar from "@/public/avatars/sample.png";
import recommend_logo from "@/public/icons/recommend_logo.svg";
import TableCollapseArrow from "@/public/icons/table_collapse_arrow";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import CaregiversTableModal from "./Modals/CaregiversTableModal";

const pastCaregiversItems = [
  {
    name: "Ahmed Ramos",
    hourlyCharge: "$12-69",
    totalHourSpent: "40hr 45min",
    totalPaid: "$3,460",
  },
  {
    name: "Betty A.",
    hourlyCharge: "$15-40",
    totalHourSpent: "60hr 53min",
    totalPaid: "$3,000",
  },
  {
    name: "Sky Grey",
    hourlyCharge: "$10-57",
    totalHourSpent: "64hr 20min",
    totalPaid: "$1,500",
  },
  {
    name: "Betty A.",
    hourlyCharge: "$15-40",
    totalHourSpent: "60hr 53min",
    totalPaid: "$3,000",
  },
  {
    name: "Sky Grey",
    hourlyCharge: "$10-57",
    totalHourSpent: "64hr 20min",
    totalPaid: "$1,500",
  },
  {
    name: "Ronaldo",
    hourlyCharge: "$12-20",
    totalHourSpent: "20hr 4min",
    totalPaid: "$1,299",
  },
  {
    name: "James Harden",
    hourlyCharge: "$12-43",
    totalHourSpent: "54hr 39min",
    totalPaid: "$1,211",
  },
  {
    name: "Yisrael Adesanya",
    hourlyCharge: "$12-65",
    totalHourSpent: "111hr 43min",
    totalPaid: "$4,550",
  },
  {
    name: "James Harden",
    hourlyCharge: "$12-43",
    totalHourSpent: "54hr 39min",
    totalPaid: "$1,211",
  },
  {
    name: "Yisrael Adesanya",
    hourlyCharge: "$12-65",
    totalHourSpent: "111hr 43min",
    totalPaid: "$4,550",
  },
];

const CaregiversTableCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.backgroundColor = "#FFF2F588";
    event.currentTarget.style.paddingLeft = "1px";
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event.currentTarget.style.backgroundColor = index % 2 ? "" : "#FAFAFB";
    event.currentTarget.style.paddingLeft = "0px";
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

  return (
    <div className="w-[670px] bg-white shadow-sm rounded-xl h-[410px] overflow-hidden">
      <div className="mx-[12px] mt-[25px] flex flex-row justify-between">
        <div className="text-textdarkColor text-[16px] font-bold">
          Past Caregivers
        </div>
        <ThemeProvider theme={theme}>
          <Button className="text-[12px]" size="small" onClick={handleOpen}>
            See more
          </Button>
        </ThemeProvider>
        {/* <div className="text-primary text-[12px] font-bold">See more</div> */}
      </div>
      <div className="flex flex-col items-center">
        <div className="text-textdarkColor text-[12px] text-center w-[600px]">
          <div className="flex flex-row h-[50px]">
            <div className="w-[10%] flex flex-row items-center justify-center">
              <div className="mr-2">SN</div>
              <TableCollapseArrow />
            </div>
            <div className="w-[30%] flex flex-row items-center">
              <div className="ml-[15%] flex flex-row flex-start items-center">
                <div className="mr-2">Name</div>
                <TableCollapseArrow />
              </div>
            </div>
            <div className="w-[20%] flex flex-row items-center justify-center">
              <div className="mr-2">Hourly charge</div>
              <TableCollapseArrow />
            </div>
            <div className="w-[20%] flex flex-row items-center justify-center">
              <div className="mr-2">Total hour spent</div>
              <TableCollapseArrow />
            </div>
            <div className="w-[20%] flex flex-row items-center justify-center">
              <div className="mr-2">Total paid</div>
              <TableCollapseArrow />
            </div>
          </div>
          <div className="flex flex-col cursor-pointer mb-[10px]">
            {pastCaregiversItems.map((item, index) => {
              return (
                <div
                  className="flex flex-row h-[50px] items-center rounded-md"
                  style={{ backgroundColor: `${index % 2 ? "" : "#FAFAFB"}` }}
                  key={`caregiver_item_${index}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={(event) => handleMouseLeave(event, index)}
                >
                  <div className="w-[10%] flex flex-row justify-center">
                    {index < 3 ? (
                      <Image alt={item.name} src={recommend_logo} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="w-[30%]">
                    <div className="text-forgotColor ml-[10%] flex flex-row items-center items-start">
                      <Image
                        alt={item.name}
                        src={sm_avatar}
                        width={34}
                        className="rounded-[50%] mr-[5px]"
                        style={{ height: "auto" }}
                        priority={false}
                      />
                      {item.name}
                    </div>
                  </div>
                  <div className="w-[20%]">{item.hourlyCharge}</div>
                  <div className="w-[20%]">{item.totalHourSpent}</div>
                  <div className="text-[#30A64A] w-[20%]">{item.totalPaid}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CaregiversTableModal
        open={open}
        handleClose={handleClose}
        pastCaregiversItems={pastCaregiversItems}
      />
    </div>
  );
};

export default CaregiversTableCard;

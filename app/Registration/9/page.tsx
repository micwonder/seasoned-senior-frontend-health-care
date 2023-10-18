"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Children, useState } from "react";

import WithRightBG from "@/components/auth/WithRightBG";
import LogoImg from "@/components/auth/LogoImg";
import OptionalLbl from "@/components/auth/Registration/OptionalLbl";
import ProgressStatusBar from "@/components/auth/Registration/ProgressStatusBar";
import SaveExitBtn from "@/components/auth/Registration/SaveExitBtn";
import ContinueBtn from "@/components/auth/Registration/ContinueBtn";
import BackBtn from "@/components/auth/Registration/BackBtn";
import ComMethodSel from "@/components/auth/Registration/ComMethodSel";
import { ThemeProvider, createTheme } from "@mui/material";
import MinHeightTextarea from "@/components/auth/Registration/MinHeightTextarea";
import CheckMarkSelection from "@/components/auth/Registration/CheckMarkSelection";
type comMethodDataType = {
  id: number;
  title: string;
};

const comMethodData: comMethodDataType[] = [
  {
    id: 0,
    title: "No",
  },
  {
    id: 1,
    title: "Yes",
  },
];

const religionItemsData: string[] = [
  "Buddhism",
  "Islam",
  "Judaism",
  "Catholicism",
  "Christianity",
  "Mormonism",
  "Scientology",
  "Others",
];

const raceItemsData: string[] = [
  "White & European American",
  "Hispanic & Latino American",
  "African American",
  "Native American & Alaska Natives",
  "Native Hawaiians & Pacific Islanders",
  "Middle Easterners & North African",
  "Asian American",
  "Others",
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

const Login = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [selectedComMethodID, setComMethodId] = useState<number>();
  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_9.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[145px] fixed">
          <BackBtn onClicked={() => router.push("/Registration/8")} />
        </div>
        <ProgressStatusBar completeness={9} hasBack={true} />
        <OptionalLbl />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="px-8 mx-auto mt-8 sm:w-full"
        >
          <div className="text-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Additional Information
            </div>
            <div className="text-[18px] text-textdarkColor font-arial font-normal mt-6 mx-7">
              &nbsp;&nbsp;&nbsp; Are there any cultural or religious
              considerations we should be aware of in providing care for the
              senior?
            </div>
          </div>
          <div className="mt-4 w-[60%]">
            {comMethodData.map((item, index) => (
              <ComMethodSel
                key={index.toString()}
                title={item.title}
                status={item.id === selectedComMethodID ? true : false}
                onClick={(e) => {
                  if (
                    e.type === "click" &&
                    e.clientX !== 0 &&
                    e.clientY !== 0
                  ) {
                    setComMethodId(item.id);
                  }
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: selectedComMethodID === 1 ? "flex" : "none",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="font-arial"
          >
            <div className="mt-4 text-textdarkColor font-[16px] ledding-[400]">
              You selected yes, please specify
            </div>
            <div className="mt-2 font-[14px] text-distlineColor ledding-[400]">
              This will help us match you with caregivers based on cultural
              preference
            </div>
            <div className="w-full mt-6 grid grid-cols-2 gap-[24px] wh-10">
              <CheckMarkSelection
                label="Choose Religion"
                name="Religion"
                items={religionItemsData}
              />
              <CheckMarkSelection
                label="Choose Race"
                name="Race"
                items={raceItemsData}
              />
            </div>
          </div>
          <div className="text-center text-base text-textdarkColor font-arial font-normal mt-8 mx-[58px]">
            Is there any additional information or specific requests you would
            like to share with us to ensure the best possible care for the
            senior?
            <ThemeProvider theme={theme}>
              <div className="mt-4 w-full">
              <MinHeightTextarea
                rows={5}
                cols={30}
                placeholder="Leave a detailed note"
              /></div>
            </ThemeProvider>
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-auto">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/Registration/10")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;

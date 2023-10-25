import React from "react";
import ClientDashboardSideBar from "./ClientDashboardSideBar";
import HeaderWithSearchBtn from "./HeaderWithSearchBtn";
import { Typography } from "@mui/material";
import md_avatar from "@/public/avatars/sample.png";
import Image from "next/image";

const ClientDashboardLayout = ({
  selected,
  children,
}: {
  selected: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-col font-arial">
        <HeaderWithSearchBtn />
        <div
          className="bg-blurColor flex flex-row"
          style={{ borderTop: "1px solid #DFDBD8 " }}
        >
          <ClientDashboardSideBar selected={selected} />
          <div
            style={{ borderLeft: "1px solid #C4C4C4" }}
            className="flex flex-col"
          >
            <div className="flex flex-row items-center h-[100px]">
              <div className="mt-[8px] ml-[9px] ">
                <span className="text-[16px] text-primary">{selected}</span>
                <Typography id="greeting-caption" variant="h6" component="h2">
                  Hi, Gabby Alao
                </Typography>
              </div>
              <div className="flex flex-row absolute right-[80px] items-center">
                <Image
                  style={{ borderRadius: "50%", height: "auto" }}
                  alt="md-avatar"
                  src={md_avatar}
                  width={66}
                />
                <div className="ml-[15px] flex flex-col text-distlineColor">
                  <span className="text-[16px] font-bold text-textdarkColor">
                    Tearia Alao
                  </span>
                  <span className="text-[14px]">
                    Care Manager at Seasoned Senior LLC
                  </span>
                  <span className="text-[14px]">+1 347 866 1828</span>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboardLayout;

"use client;";

import Image from "next/image";
import { useRouter } from "next/navigation";
import app_logo from "@/public/icons/app_logo.svg";
import sm_avatar from "@/public/avatars/sample.png";
import CollapseDown from "@/public/icons/collapse_down";
import search_icon from "@/public/icons/search_icon.svg";

const HeaderWithSearchBtn = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-[120px] flex justify-center items-center text-distlineColor">
        <div className="left-[41px] absolute cursor-pointer z-10">
          <Image
            alt="logo"
            src={app_logo}
            onClick={() => router.push("/")}
            width={135}
            priority={false}
            style={{ height: "auto" }}
          />
          <div className="text-[14px] mt-2">CLIENT PORTAL</div>
        </div>
        <div className="pl-[25px] flex flex-row items-center border h-[60px] w-[60%] sm:hidden md:hidden rounded-xl">
          <Image alt="Global search" src={search_icon} width={24} />
          <span className="ml-[8px] text-distlineColor text-[16px]">
            Global search
          </span>
        </div>
        <div className="right-[37px] absolute z-10 flex flex-row gap-2 items-center">
          <Image
            alt="sm-avatar"
            src={sm_avatar}
            width={32}
            priority={true}
            style={{
              height: "auto",
              borderRadius: "50%",
              border: "0.6px solid rgba(255, 114, 140, 0.99)",
            }}
          />
          <span className="text-[16px] font-bold text-textdarkColor">
            Gabby
          </span>
          <CollapseDown color="#000" width={25} height={26} />
        </div>
      </div>
    </>
  );
};

export default HeaderWithSearchBtn;

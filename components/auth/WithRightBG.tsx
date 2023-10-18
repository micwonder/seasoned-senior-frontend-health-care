import { url } from "inspector";
import React from "react";
import Image from "next/image";

const WithRightBG = ({
  imgpathname,
  children,
}: {
  imgpathname: string;
  children: React.ReactNode;
}) => {
  return (
    <div style={{ zIndex: 55 }} className={`grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1`}>
      <div className="relative w-full h-screen flex flex-col overflow-y-auto">
        {children}
      </div>
      <div
        style={{
          backgroundImage: `url(${imgpathname})`,
        }}
        className="bg-no-repeat sm:hidden md:hidden h-full bg-center bg-cover"
        // style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div
          style={{
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor:
              "rgba(0, 0, 0, 0.1)" /* Adjust the opacity as needed */,
          }}
        ></div>
      </div>
    </div>
  );
};

export default WithRightBG;

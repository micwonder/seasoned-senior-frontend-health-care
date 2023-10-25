"use client";

import Link from "next/link";
import React from "react";

const DashboardPrimaryBtn = ({
  btnValue,
  onClicked,
}: {
  btnValue: string;
  onClicked: Function;
}) => {
  return (
    <button
      type="submit"
      className="block bg-[#CB5A6F] hover:bg-primaryHover active:bg-primaryDisabled 
                    text-white text-[14px] rounded-lg px-4 py-3 text-loginBtnTextSize font-arial"
      onClick={() => onClicked()}
    >
      {btnValue}
    </button>
  );
};

DashboardPrimaryBtn.displayName = "DashboardPrimaryBtn";

export default DashboardPrimaryBtn;

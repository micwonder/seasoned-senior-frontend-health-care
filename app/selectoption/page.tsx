"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/auth/WithRightBG";
import LogoImg from "@/components/auth/LogoImg";
import FormPrimaryBtn from "@/components/auth/FormPrimaryBtn";
import Role from "@/components/auth/Role";
import CallAssistance from "@/components/auth/CallAssistance";

const SelectOption = () => {
  const router = useRouter();
  const [showRoleSelected, setShowRoleSelected] = useState(0);

  return (
    <>
      <WithRightBG imgpathname="/images/login.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="mx-auto mt-[186px] sm:w-full">
          <div className="text-center text-[32px] text-textdarkColor font-arial font-bold">
            Get started now, select an option.
          </div>
          <div className="py-4 px-4 text-base leading-6 text-gray-700">
            <div className="justify-center gap-5 grid grid-cols-2 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
              <div
                onClick={() => {
                  setShowRoleSelected(1);
                }}
              >
                <Role
                  title="I need a caregiver"
                  description="Hire Verified, Passionate and Compatible Senior caregivers around you"
                  imgurl="/gifs/caregiver.gif"
                  borderColor={
                    showRoleSelected === 1
                      ? "border-borderSelectColor"
                      : "border-borderGreyColor"
                  }
                  borderWidth={
                    showRoleSelected === 1 ? "border-[3px]" : "border-[1px]"
                  }
                  gifmagin="mt-[25px]"
                />
              </div>
              <div
                onClick={() => {
                  setShowRoleSelected(2);
                }}
              >
                <Role
                  title="I need a caregiver job"
                  description="Create a Profile, Get verified, Connect with Seniors looking for care around you"
                  imgurl="/gifs/caregive_job.gif"
                  borderColor={
                    showRoleSelected === 2
                      ? "border-borderSelectColor"
                      : "border-borderGreyColor"
                  }
                  borderWidth={
                    showRoleSelected === 2 ? "border-[3px]" : "border-[1px]"
                  }
                  gifmagin="mt-[10px]"
                />
              </div>
            </div>
            <div className=" mt-12">
              <div style={{ display: showRoleSelected ? "block" : "none" }}>
                <CallAssistance
                  experssion="If you need assistance with completing your application please call :"
                  action="+1 347 866 1828"
                />
              </div>
            </div>
            <div className="relative w-[400px] mx-auto  mt-4 sm:w-full">
              <FormPrimaryBtn
                onClicked={() => {
                  router.push("/Registration/1");
                }}
              >
                Continue
              </FormPrimaryBtn>
            </div>
          </div>
        </div>
      </WithRightBG>
    </>
  );
};

export default SelectOption;

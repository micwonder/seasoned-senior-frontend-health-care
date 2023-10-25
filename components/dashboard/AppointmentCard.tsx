import React, { useState } from "react";
import Image from "next/image";
import mdmd_avatar from "@/public/avatars/sample.png";
import ClockIcon from "@/public/icons/clock_icon";
import { useRouter } from "next/navigation";
import DashboardPrimaryBtn from "./DashboardPrimaryBtn";
import SmRoundedBtn from "./SmRoundedBtn";
import CustomRatingCom from "./CustomRatingCom";
import reaction_like from "@/public/icons/reaction_like.svg";
import reaction_dislike from "@/public/icons/reaction_unlike.svg";
import AppointmentRescheduleModal from "./Modals/AppointmentRescheduleModal";

const AppointmentCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-white flex flex-col pt-[19px] px-[14px] pb-[11px] w-[670px] shadow-sm rounded-xl">
      <span className="font-bold text-[16px]">Upcoming Care Visit</span>
      <div
        style={{ border: "0.699px solid rgba(196, 196, 196, 0.30)" }}
        className="flex flex-col py-[13px] mt-[24px]"
      >
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="flex flex-row">
            <Image
              className="rounded-xl"
              style={{
                border: "2px solid rgba(255, 114, 140, 0.99)",
                width: "auto",
              }}
              alt="appointment card avatar"
              src={mdmd_avatar}
              height={80}
              priority={false}
            />
            <div className="ml-[13px] flex flex-col">
              <div className="flex flex-row items-center mb-[16px]">
                <span className="font-bold text-[18px]">Frank Sergio</span>
                <div className="flex flex-row ml-8 gap-1">
                  {["Housekeeping", "Meal Preparation", "+3"].map(
                    (item, index) => {
                      return (
                        <SmRoundedBtn
                          key={`sm_rounded_btn_${index}`}
                          value={item}
                        />
                      );
                    }
                  )}
                </div>
              </div>
              <div>
                <span className="text-distlineColor text-[14px] mr-[14px]">
                  Maryland lane, Arizona, USA.
                </span>
                <span className="text-distlineColor text-[14px] mr-[14px]">
                  12miles away
                </span>
                <span className="text-distlineColor text-[14px] mr-[14px]">
                  $12 - 35/hr.
                </span>
              </div>
              <div className="flex flex-row items-center">
                <CustomRatingCom />
                <div className="text-bannerTextColor ml-8 text-[14px] underline">
                  Reviews
                </div>
                <Image
                  className="ml-[14px]"
                  alt="reaction like"
                  src={reaction_like}
                />
                <div className="ml-[4px] text-[#00FF50] text-[12px]">90</div>
                <Image
                  className="ml-[8px]"
                  alt="reaction dislike"
                  src={reaction_dislike}
                />
                <div className="ml-[4px] text-[#EB4336] text-[12px]">12</div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] py-[10px] px-[24px] gap-[34px] flex flex-row items-center border border-distlineColor rounded-xl">
            <div className="flex items-center">
              <ClockIcon color="#828282" width={24} height={24} />
              <div className="ml-[8px] text-distlineColor text-[16px]">
                Mon, Aug 30, 09:00am - 3:30pm
              </div>
            </div>
            <div className="flex justify-center">
              <DashboardPrimaryBtn
                btnValue="RESCHEDULE APPOINTMENT"
                onClicked={handleOpen}
              />
            </div>
          </div>
        </div>
      </div>

      <AppointmentRescheduleModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default AppointmentCard;

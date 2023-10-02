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
import DatePickerCom from "@/components/auth/Registration/DatePickerCom";
import DaySelection from "@/components/auth/Registration/DaySelection";
import WeekSelection from "@/components/auth/Registration/WeekSelection";
import MonthSelection from "@/components/auth/Registration/MonthSelection";
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
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [selectedComMethodID, setComMethodId] = useState<number>();
  return (
    <>
      <div>
        <LogoImg onClicked={() => router.push("/")} />
        <div className="flex ml-8 mt-[0px] absolute">
          <BackBtn onClicked={() => router.push("/Registration/10")} />
        </div>
        <ProgressStatusBar completeness={11} hasBack={true} />
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
              Agreement and Terms
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-6 mx-7">
              &nbsp;&nbsp;&nbsp; Please read carefully and click checkbox if you
              agree with our terms and policies
            </div>
          </div>
          <div className="w-[70%]">
            <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
              Services Provided
            </div>
            <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
              1.1 The Agency agrees to provide senior home care services as
              outlined in the client's individualized care plan, which will be
              developed and agreed upon between the Agency and the Client. These
              services may include but are not limited to, assistance with
              activities of daily living, medication reminders, meal
              preparation, light housekeeping, and companionship.
              <br />
              <br />
              1.2 The Agency will make reasonable efforts to assign a qualified
              and compatible caregiver to the Client based on their needs and
              preferences. However, the Agency cannot guarantee the availability
              of a specific caregiver at all times.
            </div>
            <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
              Client Responsibilities
            </div>
            <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
              2.1 The Client acknowledges that they are responsible for making
              decisions regarding their care, including but not limited to,
              selecting the type of services required, the specific tasks to be
              performed, and the scheduling of services.
              <br />
              <br />
              2.2 The Client agrees to provide accurate and complete information
              regarding their medical history, current medications, and any
              relevant health conditions to the Agency to ensure appropriate
              care.
              <br />
              <br />
              2.3 The Client is responsible for providing a safe and suitable
              environment for the caregiver to perform their duties. This
              includes maintaining a clean and hazard-free home, providing
              necessary supplies, and ensuring the safety of the caregiver while
              on the premises.
              <br />
              <br />
              2.4 The Client agrees to promptly communicate any changes in their
              care needs, schedule, or concerns regarding the services provided
              by the Agency.
            </div>
            <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
              Fees and Payment
            </div>
            <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
              3.1 The Client agrees to pay the Agency the agreed-upon fees for
              the services provided. The fees will be outlined in a separate fee
              schedule provided to the Client.
              <br />
              <br />
              3.2 Payment for services rendered is due upon receipt of the
              invoice. The Agency accepts payment via [accepted payment
              methods].
              <br />
              <br />
              3.3 In the event of non-payment or late payment, the Agency
              reserves the right to suspend or terminate services until payment
              is received in full.
            </div>
            <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
              Liability
            </div>
            <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
              4.1 The Client acknowledges that senior home care services involve
              inherent risks and agrees to assume all liability for any
              injuries, accidents, damages, or losses that may occur to
              themselves, their property, or any third party during the
              provision of services by the Agency or its caregivers.
              <br />
              <br />
              4.2 The Client agrees to release, indemnify, and hold harmless the
              Agency, its employees, and caregivers from any claims,
              liabilities, damages, or expenses arising from or related to the
              services provided, except for claims arising from the gross
              negligence or willful misconduct of the Agency.
            </div>

            <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
              Termination
            </div>
            <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
              5.1 Either party may terminate this Contract by providing written
              notice to the other party with a minimum of five days' notice.
              <br />
              <br />
              5.2 The Client acknowledges that termination of services may
              require the Client to seek alternative care arrangements, and the
              Agency shall not be responsible for such arrangements.
              <br />
              <br />
              5.3 In the event of termination, the Client agrees to pay any
              outstanding fees owed to the Agency for services rendered up to
              the termination date.
            </div>
            <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
              Governing Law
            </div>
            <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
              This Contract shall be governed by and construed in accordance
              with the laws of “client” State. Any disputes arising from or
              related to this Contract shall be resolved through mediation or
              arbitration in accordance with the rules of “client” State.
            </div>
            <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
              Miscellaneous
            </div>
            <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
              I agree not to privately employ any nurse or employee assigned to
              me by Seasoned senior LLC at any time during the term in which I
              am receiving Seasoned senior LLC services and for a period of
              three (3) months following the termination of Seasoned senior LLC
              services for any reason. In the event I employ a Seasoned senior
              LLC nurse or employee in violation of this agreement, I shall pay
              Seasoned Senior a finder's fee of $10,000.00 for each nurse I
              employ and $5,000.00 for each non-licensed employee I employ.
            </div>
          </div>
          <br />
          <br />
          <div className="text-distlineColor text-[20px] font-bold">
            <input
              type="checkbox"
              className="mt-2 accent-[#CB5A6F] w-5 h-5 text-textdarkColor bg-gray-100 border-gray-300 "
              name="checkbox"
              // checked={status}
              onChange={(val) => {
                console.log(val);
              }}
            />
            &nbsp;By signing I Agree to to abide by the terms of agreement
            between myself and Season senior LLC.
          </div>
          <br />
          <br />
          <div
            className="w-full"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* <SaveExitBtn onClicked={() => {}} /> */}
            <button
              type="submit"
              className="w-[20%] block bg-primary hover:bg-primaryHover focus:bg-primaryDisabled 
                    text-white rounded-lg px-4 py-3 mt-4 mb-9 text-loginBtnTextSize font-arial border-2 border-primary"
            >
              FINISH
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

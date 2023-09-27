"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import LogoImg from "@/components/auth/LogoImg";
import BackBtn from "@/components/auth/Registration/BackBtn";
import ProgressStatusBar from "@/components/auth/Registration/ProgressStatusBar";
import CarePlanBox from "@/components/auth/Registration/CarePlanBox";
import SaveExitBtn from "@/components/auth/Registration/SaveExitBtn";
import ContinueBtn from "@/components/auth/Registration/ContinueBtn";
type carePlanDataType = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
};

const carePlanData: carePlanDataType[] = [
  {
    id: 0,
    thumbnail: "/careplan/plan_logo_1.png",
    title: "Personal Care Assistance",
    description:
      "Our caregivers provide assistance with activities of daily living (ADLs) such as bathing, dressing, grooming, toileting, and mobility support. We will ensure the personal hygiene and physical well-being of seniors.",
  },
  {
    id: 1,
    thumbnail: "/careplan/plan_logo_2.png",
    title: "Medication Management",
    description:
      "Caregivers will help seniors manage their medications, ensuring they take the correct dosages at the prescribed times.We will assist with organizing medication schedules and coordinating prescription refills.",
  },
  {
    id: 2,
    thumbnail: "/careplan/plan_logo_3.png",
    title: "Meal Preparation",
    description:
      "Our home health aides will prepare nutritious meals that cater to seniors' dietary requirements. They will also accommodate specific dietary restrictions or preferences.",
  },
  {
    id: 3,
    thumbnail: "/careplan/plan_logo_4.png",
    title: "Respite Care",
    description:
      "We offer respite care services to provide temporary relief for family caregivers who need time off. This allows family caregivers to rest or attend to personal matters while knowing their loved ones are in capable hands.",
  },
  {
    id: 4,
    thumbnail: "/careplan/plan_logo_5.png",
    title: "Housekeeping",
    description:
      "Caregivers will help with light housekeeping tasks, including tidying up, laundry, changing linens, and maintaining a safe and clean living environment for seniors.",
  },
  {
    id: 5,
    thumbnail: "/careplan/plan_logo_6.png",
    title: "Medication Reminders",
    description:
      "Caregivers will provide reminders to seniors to take their medications as prescribed, ensuring adherence to medication schedules.",
  },
  {
    id: 6,
    thumbnail: "/careplan/plan_logo_7.png",
    title: "Monitoring Health Conditions",
    description:
      "Caregivers will monitor and report changes in seniors' health conditions to healthcare professionals or family members, such as noting vital signs, symptoms, or concerns.",
  },
  {
    id: 7,
    thumbnail: "/careplan/plan_logo_8.png",
    title: "Regular Assessments and Care Plans",
    description:
      "We conduct assessments to evaluate seniors' needs and develop personalized care plans. These care plans outline the specific services required and are regularly reviewed and adjusted to accommodate changing needs.",
  },
  {
    id: 8,
    thumbnail: "/careplan/plan_logo_9.png",
    title: "Fall Prevention and Home Safety",
    description:
      "Caregivers will assess the home environment for potential safety hazards and implement fall prevention measures. They may suggest modifications or adaptations to improve safety and reduce the risk of accidents.",
  },
  {
    id: 9,
    thumbnail: "/careplan/plan_logo_10.png",
    title: "Care Coordination",
    description:
      "We provide care coordination services to help seniors navigate the healthcare system and ensure they receive appropriate medical care. This can involve scheduling appointments, communicating with healthcare professionals, and coordinating home health services.",
  },
  {
    id: 10,
    thumbnail: "/careplan/plan_logo_11.png",
    title: "Palliative Care",
    description:
      "Season seniors offer palliative care services to provide comfort and support to seniors with serious illnesses. Our caregivers focus on managing pain, addressing symptoms, and enhancing the quality of life for seniors in need of specialized care.",
  },
  {
    id: 11,
    thumbnail: "/careplan/plan_logo_12.png",
    title: "24/7 Care",
    description:
      "Seasoned Senior caregivers provide around-the-clock care for seniors who require continuous monitoring or assistance. This ensures that seniors have access to support and assistance at any time, including overnight care and emergency situations.",
  },
  {
    id: 12,
    thumbnail: "/careplan/plan_logo_13.png",
    title: "Specialized Care Services",
    description:
      "Our caregivers and healthcare professionals are trained in specialized areas such as diabetes management, stroke recovery, wound care, or other specific medical conditions. These specialized services ensure that seniors receive tailored care based on their unique needs.",
  },
  {
    id: 13,
    thumbnail: "/careplan/plan_logo_14.png",
    title: "Memory Care",
    description:
      "Our professionals provide specialized memory care services for seniors with Alzheimer's disease or other forms of dementia. Caregivers are trained in memory care techniques, ensuring the safety and well-being of seniors with cognitive impairment.",
  },
  {
    id: 14,
    thumbnail: "/careplan/plan_logo_15.png",
    title: "Companionship and Social Support",
    description:
      "Caregivers offer companionship and engage in activities with seniors, providing emotional support, conversation, and helping to alleviate feelings of loneliness or isolation. They can participate in hobbies, games, or accompany seniors on outings.",
  },
  {
    id: 15,
    thumbnail: "/careplan/plan_logo_16.png",
    title: "Emotional Support and Companionship for Families",
    description:
      "Seasoned Senior recognizes that caregiving also affects family members. We provide emotional support and resources for families, helping them navigate the challenges of caregiving and offering peace of mind.",
  },
];

const Login = () => {
  const router = useRouter();
  const [selectedCarePlanId, setSelectedCarePlanId] = useState<number>(7);

  return (
    <>
      <LogoImg onClicked={() => router.push("/")} />
      <div className="flex ml-8 mt-0 absolute">
        <BackBtn onClicked={() => router.push("/Registration/1")} />
      </div>
      <ProgressStatusBar completeness={2} hasBack={true} />
      <div className="text-center mt-8">
        <div className=" text-[32px] text-textdarkColor font-arial font-bold">
          Care Plan
        </div>

        <div className="text-base text-distlineColor font-arial font-normal mt-4">
          Select from the services below to create a care plan
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 mx-9">
        {carePlanData.map((item, index) => (
          <CarePlanBox
            key={index.toString()}
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail}
            status={item.id === selectedCarePlanId ? true : false}
            onClick={(e) => {
              if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
                setSelectedCarePlanId(item.id);
              }
            }}
          />
        ))}
      </div>
      <div className="flex justify-between mx-8 my-4">
        <SaveExitBtn onClicked={() => {}} />
        <ContinueBtn onClicked={() => router.push("/Registration/3")} />
      </div>
    </>
  );
};

export default Login;

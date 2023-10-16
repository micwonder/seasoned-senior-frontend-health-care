import { PrimaryButton } from "../PrimaryButton";

const ServicesBanner = () => {
  return (
    <div className="bg-[#f5f5f5] bg-services-banner lg:bg-none md:bg-none sm:bg-none bg-cover h-[720px] lg:h-auto md:h-auto sm:h-auto 2xl:ml-[-130px] xl:ml-[-130px] 4xl:pl-[190px] 3xl:pl-[190px] 2xl:pl-[180px] xl:pl-[180px] px-[50px] pt-[114px] lg:py-[50px] md:py-[50px] sm:py-[50px]">
      <div className="w-[550px] lg:w-full md:w-full sm:w-full">
        <span className="text-bannerTextSize sm:text-[35px] text-bannerTextColor leading-[63.5px] font-normal font-arial">
          Senior care services designed to{" "}
          <span className="text-primary font-bold font-arial">
            support and assist
          </span>{" "}
          you in the comfort of your home.
        </span>
      </div>
      <div className="mt-[24px]">
        <span className="font-serif text-[#2F2F2F] text-[20px] leading-[28px]">
          Our services are delivered by trained professionals
        </span>
      </div>
      <div className="mt-[48px]">
        <PrimaryButton href="/Registration/1">Hire a Caregiver</PrimaryButton>
      </div>
    </div>
  );
};

export default ServicesBanner;

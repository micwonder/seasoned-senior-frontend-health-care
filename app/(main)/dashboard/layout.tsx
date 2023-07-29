import ServiceSection from "@/components/services/HomeServiceSection";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-dashboardBgColor pb-[60px] sm:pb-0'>
      <div className='h-[370px] lg:h-[240px] md:h-[240px] sm:h-[0px] bg-dashboardDecColor'></div>
      <div className={`4xl:w-[1275px] 3xl:w-[1275px] 2xl:w-[1275px] w-auto 4xl:mx-auto 3xl:mx-auto 
                      2xl:mx-auto sm:mx-[0] mx-[50px] mt-[-185px] lg:mt-[-140px] md:mt-[-140px] sm:mt-[0px] bg-white`}>
        <div className='py-[90px] lg:py-[45px] md:py-[45px] sm:py-[45px] 4xl:px-[130px] 3xl:px-[130px] 2xl:px-[130px] sm:px-[20px] px-[50px]'>
          {children}
        </div>
      </div>
    </div>
  )
};
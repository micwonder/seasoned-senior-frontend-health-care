'use client'

import { PrimaryButton } from '../PrimaryButton'

const ServicesBanner = () => {
    return <div className='bg-services-banner bg-cover 2xl:ml-[-130px] xl:ml-[-130px] lg:ml-[-130px] h-[720px] 4xl:pl-[190px] 3xl:pl-[190px] 2xl:pl-[180px] xl:pl-[180px] lg:pl-[180px] pt-[114px]'>
        <div className='w-[550px]'>
            <span className='text-bannerTextSize text-bannerTextColor leading-[63.5px] font-[400] font-arial'>Senior care services designed to <span className='text-primary font-[700] font-arial'>support and assist</span> you in the comfort of your home.</span>
        </div>
        <div className='mt-[30px]'>
            <span className='font-serif text-[#2F2F2F] text-[20px] leading-[28px]'>Our services are delivered by trained professionals</span>
        </div>
        <div className='mt-[43px]'>
            <PrimaryButton onClicked={() => { alert("Apply Clicked!"); }}>Apply For Care</PrimaryButton>
        </div>
    </div>
};

export default ServicesBanner;
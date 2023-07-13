'use client'

import { PrimaryButton } from "../PrimaryButton"

const ServicesBanner = () => {
    return <div className='bg-services-banner bg-cover h-[720px] pl-[190px] pt-[114px]'>
        <div>
            <span className='text-bannerTextSize text-bannerTextColor leading-[63.5px] font-[400]'>
                Senior care services<br />
                designed to <span className='text-primary font-[700]'>support<br />
                    and assist</span> you in<br /> the comfort<br /> of your home.</span>
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
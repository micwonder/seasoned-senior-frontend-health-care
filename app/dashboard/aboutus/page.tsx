'use client'

import Image from 'next/image'
import { PrimaryButton } from '@/components/PrimaryButton'

const Aboutus = async () => {
  return <>
    <p className='text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-[700]'>
      About us
    </p>
    <div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
    <div className='mt-[25px]'>
      <div className='text-center'>
        <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
          “Seasoned senior is a platform that provides senior care and connects caregivers with seniors looking for care”
        </span>
      </div>
      <Image
        alt='aboutus'
        src='/images/aboutus.png'
        className='mx-auto mt-[50px]'
        width={940} height={350}
      />
      <div className='mt-[50px] text-justify'>
        <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
          Senior care services designed to support and assist elderly individuals who wish to remain in the comfort of their own homes while receiving the care they need.
          Our services are delivered by trained professionals, such as caregivers, nurses, or home health aides.
          <br />
          <br />
      
        </span>
      </div>
      <div className='text-center mt-[140px]'>
        <PrimaryButton onClicked={() => { }}>Apply For Care</PrimaryButton>
      </div>
    </div>
  </>
};

export default Aboutus;
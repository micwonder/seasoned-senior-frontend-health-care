'use client'

import Image from 'next/image';
import { PrimaryButton } from '../PrimaryButton';

const ServiceSection = () => {
	return <section className='px-[227px] py-[41px]'>
		<p className='text-right text-bannerTextColor font-[300] text-[24px]'>Services</p>
		<div className='flex mt-[42px] mb-[46px] h-[488px]'>
			<Image className='' src={'/images/services_01.png'} alt="services_01" width={478} height={488}></Image>
			<div className='ml-[320px] h-full'>
				<p className='font-arial text-[45px] text-bannerTextColor font-[700]'>Personal Care Assistance</p>
				<div>
					<span className='font-arial text-[40px] text-bannerTextColor font-[300] h-[200px] leading-none'>Our caregivers provide assistance with
						activities of daily living (ADLs) such as
						bathing, dressing, grooming, toileting,
						and mobility support. We will ensure
						the personal hygiene and physical
						well-being of seniors.</span>
				</div>
				<div className='float-right mt-auto mb-0'>
					<PrimaryButton onClicked={() => { }}>Learn More</PrimaryButton>
				</div>
			</div>
		</div>
	</section>
};

export default ServiceSection;
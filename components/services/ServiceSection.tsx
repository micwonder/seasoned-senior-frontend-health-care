'use client'

import Image from 'next/image';
import { PrimaryButton } from '../PrimaryButton';

const ServiceSection = () => {
	return <section className='px-[227px] py-[41px]'>
		<p className='text-[24px] text-bannerTextColor text-right font-[300] mb-[41px]'>Services</p>
		<div className='flex justify-between'>
			<Image className='' src={'/images/services_01.png'} alt="services_01" width={478} height={488}></Image>
			<div className='w-[700px] flex flex-col justify-between'>
				<div>
					<p className='font-arial font-[700] text-[45px] text-bannerTextColor'>Personal Care Assistance</p>
					<div>
						<span className='font-arial font-[300] text-[40px] text-bannerTextColor leading-none'>Our caregivers provide assistance with
							activities of daily living (ADLs) such as
							bathing, dressing, grooming, toileting,
							and mobility support. We will ensure
							the personal hygiene and physical
							well-being of seniors.</span>
					</div>
				</div>
				<div className='text-right'>
					<PrimaryButton onClicked={() => { }}>Learn More</PrimaryButton>
				</div>
			</div>
		</div>
	</section>
};

export default ServiceSection;
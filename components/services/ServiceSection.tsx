'use client'

import Image from 'next/image';
import { PrimaryButton } from '../PrimaryButton';

const ServiceSection = ({
	align, title, description, photoUrl
}: {
	align: string, title: string, description: string, photoUrl: string
}) => {
	return <section
		className={
			`${align == "right" ? 'bg-sectionBgColor' : 'bg-secondaryBgColor'} 
			4xl:px-[190px] 3xl:px-[190px] 2xl:px-[50px] px-[50px] pt-[122px] pb-[41px]`}>
		<div className={`relative flex lg:flex-col md:flex-col sm:flex-col 
						4xl:justify-between 3xl:justify-between 2xl:justify-between justify-between`}>
			<p className='absolute text-[24px] text-bannerTextColor text-right font-[300] right-0 top-[-60px]'>Services</p>
			{
				align == 'left' ? <Image className='float-right' src={photoUrl} alt="service_ad_photo" width={478} height={488} /> : <></>
			}
			<div className={`4xl:max-w-[700px] 3xl:max-w-[600px] 2xl:max-w-[700px] 
							xl:max-w-[550px] lg:w-full md:w-full sm:w-full flex flex-col 
							justify-between lg:mt-[50px] md:mt-[50px] sm:mt-[50px]`}>
				<div>
					<p className='font-arial font-[700] 4xl:text-[45px] 3xl:text-[40px] 2xl:text-[45px] text-[40px] text-bannerTextColor'>
						{title}
					</p>
					<div>
						<span className={`font-arial font-[300] 4xl:text-[40px] 3xl:text-[35px] 
										2xl:text-[40px] text-[35px] text-bannerTextColor leading-[50px]`}>
							{description}
						</span>
					</div>
				</div>
				<div className='text-right lg:mt-[20px] md:mt-[20px] sm:mt-[20px]'>
					<PrimaryButton onClicked={() => { }}>Learn More</PrimaryButton>
				</div>
			</div>
			{
				align == 'right'
					? <Image
						className='float-right lg:mt-[20px] md:mt-[20px] sm:mt-[20px]' src={photoUrl}
						alt="service_ad_photo" width={478} height={488} />
					: <></>
			}
		</div>
	</section>
};

export default ServiceSection;
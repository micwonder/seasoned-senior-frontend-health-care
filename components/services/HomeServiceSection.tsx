'use client'

import Image from 'next/image';
import { PrimaryButton } from '../PrimaryButton';
import { useMediaQuery } from '@/utils/useMediaQuery';

const HomeServiceSection = ({
	id, align, title, description, photoUrl
}: {
	id:number, align: string, title: string, description: string, photoUrl: string
}) => {
	const isLG = useMediaQuery(1169);

	return <section
		className={`${align == "right" ? 'bg-sectionBgColor' : 'bg-secondaryBgColor'} 
								4xl:px-[190px] 3xl:px-[190px] 2xl:px-[50px] px-[50px] pt-[122px] pb-[41px]`}>
		<div className={`relative flex lg:flex-col md:flex-col sm:flex-col justify-between`}>
			<p className={`absolute text-[24px] text-bannerTextColor text-right font-[300] ${align == 'left' || isLG ? 'right-0' : 'left-0'} top-[-60px]`}>
				Services
			</p>
			{
				align == 'left' || isLG
					? <Image className='float-right h-auto' src={photoUrl} alt="service_ad_photo" width={478} height={488} />
					: <></>
			}
			<div className={`4xl:max-w-[700px] 3xl:max-w-[600px] 2xl:max-w-[700px] 
							xl:max-w-[550px] lg:w-full md:w-full sm:w-full flex flex-col 
							justify-between lg:mt-[50px] md:mt-[50px] sm:mt-[50px]`}>
				<div>
					<p
						className='font-arial font-[700] text-bannerTextColor 
								4xl:text-[45px] 3xl:text-[40px] 2xl:text-[45px] sm:text-[30px] text-[40px] '>
						{title}
					</p>
					<div>
						<span className={`font-arial font-[300] 4xl:text-[40px] 3xl:text-[35px] 
										2xl:text-[40px] sm:text-[25px] text-[35px] text-bannerTextColor leading-[50px]`}>
							{description}
						</span>
					</div>
				</div>
				<div className={`${align == 'left' && !isLG ? 'text-right' : 'text-left'} lg:text-right md:text-right sm:text-center mt-[20px]`}>
					<PrimaryButton href={`/dashboard/services/${id}`}>Learn More</PrimaryButton>
				</div>
			</div>
			{
				align == 'right' && !isLG
					? <Image
						src={photoUrl}
						alt="service_ad_photo"
						width={478} height={488}
						className='float-right h-auto lg:mt-[50px] md:mt-[50px] sm:mt-[50px]' />
					: <></>
			}
		</div>
	</section>
};

export default HomeServiceSection;
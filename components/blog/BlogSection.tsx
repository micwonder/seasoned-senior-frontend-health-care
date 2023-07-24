'use client'

import Image from 'next/image';
import { PrimaryButton } from '../PrimaryButton';
import { useMediaQuery } from '@/utils/useMediaQuery';

const BlogSection = ({
	id, align, title, description, photoUrl
}: {
	id: number,align: string, title: string, description: string, photoUrl: string
}) => {
	const isMD = useMediaQuery(959);

	return <section className='mt-[110px]'>
		<div className={`relative flex justify-between lg:justify-normal md:flex-col sm:flex-col`}>
			<p className={`absolute text-[24px] text-bannerTextColor text-right font-[300] ${align == 'left' || isMD ? 'right-0' : 'left-0'} top-[-60px]`}>
				Blog
			</p>
			{
				align == 'left' || isMD
					? <Image className='mb-auto' src={photoUrl} alt="service_ad_photo" width={!isMD ? 318 : 478} height={325} />
					: <></>
			}
			<div className={`w-[600px] md:w-full sm:w-full flex flex-col justify-between 
											md:mt-[30px] sm:mt-[30px] ${align == 'left' && !isMD ? 'lg:ml-[50px]' : ''}`}>
				<div>
					<p
						className='font-arial font-[700] text-bannerTextColor text-[36px] lg:text-[30px] sm:text-[30px]'>
						{title}
					</p>
					<div className='text-justify'>
						<span className={`font-arial font-[300] text-[32px] lg:text-[26px] sm:text-[26px] 
														text-bannerTextColor leading-[38px] lg:leading-[30px] sm:leading-[30px]`}>
							{description}
						</span>
					</div>
				</div>
				<div className={`${align == 'left' && !isMD ? 'text-right' : 'text-left'} md:text-right sm:text-center mt-[20px]`}>
					<PrimaryButton href={`/dashboard/blog/${id}`}>Learn More</PrimaryButton>
				</div>
			</div>
			{
				align == 'right' && !isMD
					? <Image
						src={photoUrl}
						alt="blog_ad_photo"
						width={318} height={325}
						className={`mb-auto lg:ml-[50px]`} />
					: <></>
			}
		</div>
	</section>
};

export default BlogSection;
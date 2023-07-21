import Image from 'next/image'
import supabase from '@/utils/supabase'
import { HowitworksAd } from '@/types/howitworks_ad'
import { PrimaryButton } from '@/components/PrimaryButton'

const getParagraphs = async (): Promise<Array<HowitworksAd>> => {
	const { data, error } = await supabase.from('howitworks_ads').select('*').order('id', { ascending: true });
	if (error) {
		console.log(error);
		return [{
			id: null,
			title: null,
			description: null,
		}];
	}
	return data.map((item) => {
		return {
			id: item['id'],
			title: item['title'],
			description: item['description'],
		}
	});
};

const Howitworks = async () => {
	const howitworksAds: Array<HowitworksAd> = await getParagraphs();
	return <>
		<p className='text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-[700]'>
			How it works
		</p>
		<div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
		<div className='mt-[25px]'>
			<div className='text-justify'>
				<span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
					At Seasoned Senior Home Care Agency, we have a well-defined process for providing care to our seniors.
					Here&apos;s how our agency works and how we implement our care services:
				</span>
			</div>
			<Image
				alt='aboutus'
				src='/images/howitworks.png'
				className='mx-auto mt-[50px]'
				width={940} height={350}
			/>
			<div>
				{
					howitworksAds.map((howitworksAd, idx) => {
						return <div key={`howitworks_paragraph_${idx}`} className='mt-[50px] text-justify'>
							<span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[700]'>
								{`${howitworksAd.title}: `}
							</span>
							<br className='hidden md:block sm:block' />
							<span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
								{howitworksAd.description}
							</span>
						</div>
					})
				}
				<div className='mt-[50px] text-justify'>
					<span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
						At Seasoned Senior Home Care Agency, our priority is to provide compassionate, personalized, and professional care to our seniors.
						Through our well-defined process, trained caregivers, and ongoing monitoring, we ensure that our seniors receive the highest quality
						of care that promotes their independence, well-being, and overall quality of life.
					</span>
				</div>
			</div>
			<div className='text-center mt-[100px]'>
				<PrimaryButton>Learn More</PrimaryButton>
			</div>
		</div>
	</>
};

export default Howitworks;
import supabase from '@/utils/supabase'
import { ServiceAd } from '@/types/service_ad'
import DashboardServiceSection from '@/components/services/DashboardServiceSection'

const getServiceAds = async (): Promise<Array<ServiceAd>> => {
	const { data, error } = await supabase.from('service_ads').select('*').order('id', { ascending: true });
	if (error) {
		console.log(error);
		return [{
			id: null,
			title: null,
			description: null,
			photoUrl: null,
		}];
	}
	return data.map((item) => {
		return {
			id: item['id'],
			title: item['title'],
			description: item['description'],
			photoUrl: item['photo_url'],
		}
	});
};

const Services = async () => {
	const serviceAds: Array<ServiceAd> = await getServiceAds();
	return <>
		<p className='text-center text-bannerTextColor text-[45px] font-arial font-[700]'>Services</p>
		<div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
		<div className='mt-[25px]'>
			{
				serviceAds.map((serviceAd: ServiceAd, idx: number) => {
					return <DashboardServiceSection
						key={`service_section_${idx}`}
						align={idx % 2 == 0 ? 'left' : 'right'}
						title={serviceAd.title ?? ""}
						description={serviceAd.description ?? ""}
						photoUrl={serviceAd.photoUrl ?? ""} />
				})
			}
		</div>
	</>
};

export default Services;
import ServiceSection from '@/components/services/ServiceSection'
import ServicesBanner from '@/components/services/ServicesBanner'
import { ServiceAd } from '@/types/service_ad'
import supabase from '@/utils/supabase'

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
		<ServicesBanner></ServicesBanner>
		{
			serviceAds.map((serviceAd: ServiceAd, idx: number) => {
				return <ServiceSection
					align={idx % 2 == 0 ? 'left' : 'right'}
					title={serviceAd.title ?? ""}
					description={serviceAd.description ?? ""}
					photoUrl={serviceAd.photoUrl ?? ""} />
			})
		}
	</>
};

export default Services;
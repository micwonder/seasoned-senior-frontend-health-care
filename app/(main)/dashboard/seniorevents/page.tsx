import Image from 'next/image'
import supabase from '@/utils/supabase'
import { SenioreventsAd } from '@/types/seniorevents_ads'
import { PrimaryButton } from '@/components/PrimaryButton'

const getParagraphs = async (): Promise<Array<SenioreventsAd>> => {
  const { data, error } = await supabase.from('seniorevents_ads').select('*').order('id', { ascending: true });
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

const Seniorevents = async () => {
  const senioreventAds: Array<SenioreventsAd> = await getParagraphs();
  return <>
    <p className='text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-bold'>
      Senior Events
    </p>
    <div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
    <div className='mt-[25px]'>
      <Image
        alt='seniorevents'
        src='/images/seniorevents.png'
        className='w-full mt-[50px]'
      />
      <div className='text-justify mt-[50px]'>
        <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
          At Seasoned Senior, we understand the importance of providing engaging and enjoyable experiences for seniors.
          That&apos;s why we organize outdoor events within various locations, creating opportunities for seniors to connect,
          socialize, and participate in activities that promote well-being and a sense of community. Here&apos;s how we organize outdoor events for seniors:
        </span>
      </div>
      <div>
        {
          senioreventAds.map((senioreventAd, idx) => {
            return <div key={`seniorevents_paragraph_${idx}`} className='mt-[50px] text-justify'>
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
                {`${senioreventAd.title}: `}
              </span>
              <br className='hidden md:block sm:block' />
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
                {senioreventAd.description}
              </span>
            </div>
          })
        }
        <div className='mt-[50px] text-justify'>
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
            At Seasoned Senior, we believe in the power of outdoor events to enrich seniors&apos; lives, foster social connections, and promote overall well-being.
            Through meticulous planning, engaging activities, and a focus on seniors&apos; needs, we strive to create memorable and meaningful experiences that enhance
            their quality of life and bring joy to their journey.
            <br />
            <br />
            Our upcoming senior events will be listed here according to location.
          </span>
        </div>
      </div>
      <div className='text-center mt-[50px]'>
        <PrimaryButton href='/Registration/1'>apply for care</PrimaryButton>
      </div>
    </div>
  </>
};

export default Seniorevents;
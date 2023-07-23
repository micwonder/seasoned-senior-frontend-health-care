import Image from 'next/image'
import supabase from '@/utils/supabase'
import { ScheduleAd } from '@/types/schedule_ad'
import { PrimaryButton } from '@/components/PrimaryButton'

const getParagraphs = async (): Promise<Array<ScheduleAd>> => {
  const { data, error } = await supabase.from('schedule_ads').select('*').order('id', { ascending: true });
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

const Schedulemetting = async () => {
  const scheduleAds: Array<ScheduleAd> = await getParagraphs();
  return <>
    <p className='text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-[700]'>
      Schedule a meeting
    </p>
    <div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
    <div className='mt-[25px]'>
      <img
        alt='scheduleameeting'
        src='/images/scheduleameeting.png'
        className='w-full mt-[50px]'
      />
      <div className='text-justify mt-[50px]'>
        <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
          At Seasoned Senior Care Agency, we make it easy for seniors and their families to schedule a meeting with our senior care representatives.
          Here&apos;s how seniors looking for care can schedule a meeting to speak with a representative from our agency:
        </span>
      </div>
      <div>
        {
          scheduleAds.map((scheduleAd, idx) => {
            return <div key={`scheduleameeting_paragraph_${idx}`} className='mt-[50px] text-justify'>
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[700]'>
                {`${scheduleAd.title}: `}
              </span>
              <br className='hidden md:block sm:block' />
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
                {scheduleAd.description}
              </span>
            </div>
          })
        }
        <div className='mt-[50px] text-justify'>
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
            At Seasoned Senior Care Agency, we prioritize open and transparent communication with seniors and their families.
            We strive to provide a seamless and supportive experience throughout the process of scheduling a meeting, ensuring that all their questions are answered,
            and they feel comfortable and confident in choosing our agency for their care needs.
          </span>
        </div>
      </div>
      <div className='text-center mt-[50px]'>
        <PrimaryButton>Apply for Care</PrimaryButton>
      </div>
    </div>
  </>
};

export default Schedulemetting;
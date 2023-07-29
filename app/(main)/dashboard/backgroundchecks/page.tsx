import supabase from '@/utils/supabase'
import { Backgroundchecks_Ad } from '@/types/backgroundchecks_ad'
import { PrimaryButton } from '@/components/PrimaryButton'

const getParagraphs = async (): Promise<Array<Backgroundchecks_Ad>> => {
  const { data, error } = await supabase.from('backgroundchecks_ads').select('*').order('id', { ascending: true });
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

const Backgroundchecks = async () => {
  const backgroundchecksAds: Array<Backgroundchecks_Ad> = await getParagraphs();
  return <>
    <p className='text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-[700]'>
      Background checks
    </p>
    <div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
    <div className='mt-[25px]'>
      <img
        alt='backgroundchecks'
        src='/images/backgroundchecks.png'
        className='w-full mt-[50px]'
      />
      <div className='text-justify mt-[50px]'>
        <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
          At Seasoned Senior Home Care Agency, we prioritize the safety and well-being of our clients. As part of our commitment to providing exceptional care,
          we conduct thorough background checks on all our employees to ensure their suitability for working in a senior care environment. Here&apos;s an overview of
          how we conduct background checks:
        </span>
      </div>
      <div>
        {
          backgroundchecksAds.map((backgroundchecksAd, idx) => {
            return <div key={`backgroundchecks_paragraph_${idx}`} className='mt-[50px] text-justify'>
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[700]'>
                {`${backgroundchecksAd.title}: `}
              </span>
              <br />
              <br />
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
                {backgroundchecksAd.description}
              </span>
            </div>
          })
        }
        <div className='mt-[50px] text-justify'>
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-[300]'>
            We encourage clients and their families to provide feedback on the caregivers&apos; performance, allowing us to address any concerns promptly.
            <br />
            <br />
            By conducting thorough background checks, we strive to provide our clients with the peace of mind that comes from knowing their loved ones are
            in capable and trustworthy hands. Our commitment to rigorous screening and monitoring helps us maintain the highest standards of professionalism,
            integrity, and quality of care.
            <br />
            <br />
            Please note that background checks are just one aspect of our comprehensive hiring process, which also includes interviews, skills assessments, and
            evaluating candidates&apos; compatibility with our agency&apos;s values and client-focused approach.
            <br />
            <br />
            At Seasoned Senior Home Care Agency, we take pride in building a team of dedicated and compassionate caregivers who share our commitment to providing
            exceptional care to seniors in need.
          </span>
        </div>
      </div>
      <div className='text-center mt-[50px]'>
        <PrimaryButton href='/apply'>Apply for Care</PrimaryButton>
      </div>
    </div>
  </>
};

export default Backgroundchecks;
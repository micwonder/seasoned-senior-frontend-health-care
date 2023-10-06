import Image from 'next/image'
import supabase from '@/utils/supabase'
import { PrimaryButton } from '@/components/PrimaryButton'
import { SpecializedcareAd } from '@/types/specializedcare_ad'

const getParagraphs = async (type: number): Promise<Array<SpecializedcareAd>> => {
  const { data, error } = await supabase.from('specializedcare_ads').select('*').eq('type', type).order('id', { ascending: true });
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

const Specializedcare = async () => {
  const specializedcareAds_1: Array<SpecializedcareAd> = await getParagraphs(1);
  const specializedcareAds_2: Array<SpecializedcareAd> = await getParagraphs(2);
  return <>
    <p className='text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-bold'>
      Specialized care
    </p>
    <div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
    <div className='mt-[25px]'>
      <Image
        alt='specializedcare'
        src='/images/specializedcare.png'
        className='w-full mt-[50px]'
        width="1015"
        height="500"
      />
      <div>
        <div className='mt-[50px] text-justify'>
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
            At Seasoned Senior Home Care Agency, we are committed to providing specialized care for our clients based on their unique needs and
            circumstances. We understand that each individual requires personalized attention and support to maintain their well-being and independence.
            Here&apos;s how we ensure specialized care for our clients:
          </span>
        </div>
        {
          specializedcareAds_1.map((specializedcareAd, idx) => {
            return <div key={`specializedcare_paragraph_${idx}`} className='mt-[50px] text-justify'>
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
                {`${specializedcareAd.title}: `}
              </span>
              <br className='hidden md:block sm:block' />
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
                {specializedcareAd.description}
              </span>
            </div>
          })
        }

        <div className='mt-[50px] text-justify'>
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
            At Seasoned Senior Home Care Agency, we go above and beyond to provide specialized care that meets the unique needs of our clients.
            Our dedicated team of caregivers, personalized care planning, specialized training, and commitment to ongoing communication and collaboration
            ensure that our clients receive the individualized support and attention they deserve.
            <br />
            <br />
            We offer a range of specialized healthcare services to meet the unique needs of our clients. These specialized health care services include:
          </span>
        </div>

        {
          specializedcareAds_2.map((specializedcareAd, idx) => {
            return <div key={`howitworks_paragraph_${idx}`} className='mt-[50px] text-justify'>
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
                {`${specializedcareAd.title}: `}
              </span>
              <br className='hidden md:block sm:block' />
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
                {specializedcareAd.description}
              </span>
            </div>
          })
        }

        <div className='mt-[50px] text-justify'>
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
            These specialized healthcare services are designed to address the unique needs of seniors with specific medical conditions or challenges.
            Our dedicated caregivers are equipped with the knowledge, skills, and compassion necessary to provide high-quality specialized care that enhances
            the well-being and quality of life of our clients.
          </span>
        </div>
      </div>
      <div className='text-center mt-[50px]'>
        <PrimaryButton href='/Registration/1'>apply for care</PrimaryButton>
      </div>
    </div>
  </>
};

export default Specializedcare;
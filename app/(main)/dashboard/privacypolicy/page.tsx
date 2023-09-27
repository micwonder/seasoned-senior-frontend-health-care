import supabase from '@/utils/supabase'
import { PrivacypolicyAd } from '@/types/privacypolicy_ad'
import { PrimaryButton } from '@/components/PrimaryButton'

const getParagraphs = async (): Promise<Array<PrivacypolicyAd>> => {
  const { data, error } = await supabase.from('privacypolicy_ads').select('*').order('id', { ascending: true });
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

const Privacypolicy = async () => {
  let cnt = 0;
  const privacypolicyAds: Array<PrivacypolicyAd> = await getParagraphs();

  return <>
    <p className='text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-bold'>
      Privacy Policy
    </p>
    <div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
    <div className='mt-[25px]'>
      <img
        alt='privacypolicy'
        src='/images/privacypolicy.png'
        className='w-full mt-[50px]'
      />
      <div className='text-justify mt-[50px]'>
        <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
          This Privacy Policy (&quot;Policy&quot;) explains how Seasoned Senior Home Care Agency (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and protects
          the personal information of individuals (&quot;you&quot; or &quot;users&quot;) who access or use our website and services (collectively referred to as the &quot;Services&quot;).
          We are committed to protecting your privacy and ensuring the security of your personal information. By accessing or using our Services, you agree to
          the terms and practices described in this Policy.
        </span>
      </div>
      <div>
        {
          privacypolicyAds.map((privacypolicyAd, idx) => {
            let prefix: string = "", isFirst: boolean = true;
            if ((idx > 0 && privacypolicyAds[idx - 1].title?.trim() == privacypolicyAd.title?.trim())
              || (cnt == 0 && idx < privacypolicyAds.length - 1 && privacypolicyAds[idx + 1].title == privacypolicyAd.title)) {
              if (cnt != 0) {
                isFirst = false;
              }
              prefix = String.fromCharCode(cnt + 97) + '. ';
              cnt++;
            } else {
              cnt = 0;
              if (idx < privacypolicyAds.length - 1 && privacypolicyAds[idx + 1].title?.trim() == privacypolicyAd.title?.trim()) {
                isFirst = true;
                prefix = String.fromCharCode(cnt + 97) + '. ';
                cnt++;
              }
            }

            return <div key={`privacypolicy_paragraph_${idx}`} className={`${isFirst ? 'mt-[50px]' : ''} text-justify`}>
              {
                isFirst && <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
                  {`${privacypolicyAd.title}: `}
                  <br />
                </span>
              }
              <br />
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
                {prefix}
              </span>
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
                {privacypolicyAd.description}
              </span>
            </div>
          })
        }
        <div className='mt-[50px] text-justify'>
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
            By using our Services, you acknowledge that you have read, understood, and agreed to the terms and practices described in this Privacy Policy.
          </span>
        </div>
      </div>
      <div className='text-center mt-[50px]'>
        <PrimaryButton href='/apply'>Apply for Care</PrimaryButton>
      </div>
    </div >
  </>
};

export default Privacypolicy;
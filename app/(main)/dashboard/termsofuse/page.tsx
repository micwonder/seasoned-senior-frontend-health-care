import supabase from '@/utils/supabase'
import { Termsofuse_Ad } from '@/types/termsofuse_ad'
import { PrimaryButton } from '@/components/PrimaryButton'

const getParagraphs = async (): Promise<Array<Termsofuse_Ad>> => {
  const { data, error } = await supabase.from('termsofuse_ads').select('*').order('id', { ascending: true });
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

const Termsofuse = async () => {
  let cnt = 0;
  const termsofuseAds: Array<Termsofuse_Ad> = await getParagraphs();

  return <>
    <p className='text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-bold'>
      Terms of Use
    </p>
    <div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
    <div className='mt-[25px]'>
      <img
        alt='termsofuse'
        src='/images/termsofuse.png'
        className='w-full mt-[50px]'
      />
      <div className='text-justify mt-[50px]'>
        <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
          These Terms of Use (&quot;Agreement&quot;) govern your access and use of the Seasoned Senior Home Care Agency website, services, and any related
          content or materials (collectively referred to as the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by this Agreement.
          If you do not agree with any provision of this Agreement, please refrain from using our Services.
        </span>
      </div>
      <div>
        {
          termsofuseAds.map((termsofuseAd, idx) => {
            let prefix: string = "", isFirst: boolean = true;
            if ((idx > 0 && termsofuseAds[idx - 1].title?.trim() == termsofuseAd.title?.trim())
              || (cnt == 0 && idx < termsofuseAds.length - 1 && termsofuseAds[idx + 1].title == termsofuseAd.title)) {
              if (cnt != 0) {
                isFirst = false;
              }
              prefix = String.fromCharCode(cnt + 97) + '. ';
              cnt++;
            } else {
              cnt = 0;
              if (idx < termsofuseAds.length - 1 && termsofuseAds[idx + 1].title?.trim() == termsofuseAd.title?.trim()) {
                isFirst = true;
                prefix = String.fromCharCode(cnt + 97) + '. ';
                cnt++;
              }
            }

            return <div key={`termsofuse_paragraph_${idx}`} className={`${isFirst ? 'mt-[50px]' : ''} text-justify`}>
              {
                isFirst && <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
                  {`${termsofuseAd.title}: `}
                  <br />
                </span>
              }
              <br />
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
                {prefix}
              </span>
              <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
                {termsofuseAd.description}
              </span>
            </div>
          })
        }
        <div className='mt-[50px] text-justify'>
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
            If you have any questions or concerns about these Terms of Use, please [Link to the contact us page].
            <br />
            <br />
            By using our Services, you acknowledge that you have read, understood, and agreed to be bound by this Agreement.
          </span>
        </div>
      </div>
      <div className='text-center mt-[50px]'>
        <PrimaryButton href='/Registration/1'>apply for care</PrimaryButton>
      </div>
    </div >
  </>
};

export default Termsofuse;
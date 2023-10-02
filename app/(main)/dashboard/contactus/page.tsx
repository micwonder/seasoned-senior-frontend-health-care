import { PrimaryButton } from '@/components/PrimaryButton'

const Contactus = () => {
  return <>
    <p className='text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-bold'>
      Contact us
    </p>
    <div className='border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]' />
    <div className='mt-[25px]'>
      <img
        alt='contactus'
        src='/images/contactus.png'
        className='w-full mt-[50px]'
      />
      <div className='mt-[50px] text-justify sm:text-left'>
        <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light'>
          Thank you for your interest in Seasoned Senior Home Care Agency. We are here to assist you and provide the best possible care for your loved ones.
          Please feel free to reach out to us using the following contact information:
          <br />
          <br />
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
            General Inquiries:
          </span> <br className='hidden md:block sm:block' /> For general inquiries, questions, or information about our services, you can contact us through,
          <br />
          <br />
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
            Phone:
          </span><br className='hidden sm:block' /> +1 347-866-1828
          <br />
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
            Email:
          </span><br className='hidden sm:block' /> care@seasonedsenior.com
          <br />
          <br />
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
            Client Services:
          </span> <br className='hidden md:block sm:block' /> If you are an existing client or have inquiries regarding care services, scheduling, or specific client-related matters,
          please login to your portal to start a chat with a caregiver support agent.
          <br />
          <br />
          <span className='text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold'>
            Caregiver Opportunities:
          </span>
          <br />
          If you are interested in joining our team of compassionate caregivers and want to learn more about career opportunities,
          please use the Apply Button to start a caregiver application.
          <br />
          <br />
          We value your feedback and are committed to continually improving our services. If you have any suggestions, concerns, or comments,
          please don&apos;t hesitate to let us know. Your input is invaluable to us.
          <br />
          <br />
          Thank you for considering Seasoned Senior Home Care Agency. We look forward to assisting you and providing exceptional care for your loved ones.
        </span>
      </div>
      <div className='text-center mt-[50px]'>
        <PrimaryButton href='/Registration/1'>apply for care</PrimaryButton>
      </div>
    </div>
  </>
};

export default Contactus;
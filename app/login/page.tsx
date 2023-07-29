import Image from 'next/image'
import { PrimaryButton } from '@/components/PrimaryButton'
import '../globals.css'
import google_sign_icon from '/public/icons/google.svg';
import apple_sign_icon from '/public/icons/apple.svg';
import eye_icon from '/public/icons/eye-slash.svg';

const Login = () => {
  return <>
    <body>
      <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1'>
        <div>
          <Image
            alt='logo'
            src='/images/app_logo.png'
            className='mt-[29px] ml-[40px] h-auto cursor-pointer'
            width={243} height={91} priority={true} />
          <div className='text-center'>
            <p className='text-[40px] sm:text-[30px] text-textdarkColor font-arial font-[700] mt-[90px] mx-20'>
              Welcome Back
            </p >
            <br />
            <span className='text-[20px] text-[#828282] font-arial font-[400] mt-[16px]'>
              Caring for our seniors, cherishing our community.
            </span>
          </div>
          <div className="px-[200px] 3xl:px-[180px] 2xl:px-[160px] xl:px-[140px] lg:px-[120px] md:px-[100px] sm:px-[30px]">
            <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <label className=" text-textdarkColor font-normal">E-mail or phone number</label>
                <input id="email" name="email" type="text" className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="Type your e-mail or phone number" />
              </div>
              <div className="relative">
                <label className="text-textdarkColor">Password</label>
                <input id="password" name="password" type="password" className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="************" />
                <div className="absolute inset-y-0 end-0 grid place-content-center px-5 mt-8">
                  <Image alt = 'eye_icon' src = {eye_icon} width={25} height={25}/>
                </div>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-1'>
                  <p className=" text-[#797979] sm:text-center">Must be at least 8 characters</p>
                  <div className="text-right sm:text-center text-forgotColor hover:underline hover:text-gray-500">
                    <a href="#">Forgot your password?</a>
                  </div>
              </div>

              <div className="relative">
                <button type="submit" className="w-full block bg-primary hover:bg-primaryHover focus:bg-primaryDisabled text-white rounded-lg
          px-4 py-4 mt-4 text-loginBtnTextSize font-SFProDisplay">Sign In</button>
              </div>
              <div className="mt-12 mb-24 border-b text-center">
                <div className="px-6 inline-block text-lg font-yamamoto font-[500] text-textdarkColor tracking-wide bg-white transform translate-y-1/2">
                  or
                </div>
              </div>
              <div className="flex items-center justify-center mt-[16px] gap-5">
                <div className="relative">
                  <button className="mt-5 tracking-wide font-semibold bg-loginBtnColor text-textdarkColor w-[161px] py-4 rounded-lg hover: bg-loginBtnColor transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <Image src={google_sign_icon} alt='google_icon' />
                    <span className="ml-4 text-signinTextColor text-[16px]">
                      Google
                    </span>
                  </button>
                </div>
                <div className="relative">
                  <button className="mt-5 tracking-wide font-semibold bg-loginBtnColor text-textdarkColor w-[161px] py-4 rounded-lg hover: bg-loginBtnColor transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <Image src={apple_sign_icon} alt='apple_icon' />
                    <span className="ml-4 text-signinTextColor text-[16px]">
                      Apple ID
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-[14px]">
                <p className="mb-0 mr-2 text-right sm:text-center text-[#828282]">Don't have an account?</p>
                <a href="#" className=' text-left sm:text-center text-forgotColor hover:underline hover:text-gray-500'>Create Account</a>
              </div>
            </div>
            <p className="text-xs text-gray-600 text-center w-full">
              By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings. You also agree to the &nbsp;
              <a href="#" className="border-b border-gray-500 border-dotted text-forgotColor">
                Terms of Service
              </a>
              &nbsp; and &nbsp;
              <a href="#" className="border-b border-gray-500 border-dotted text-forgotColor">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="bg-[url('/images/login.png')] h-screen bg-no-repeat bg-cover block sm:hidden"></div>
      </div>
    </body>
  </>
};

export default Login;

'use client'

import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'

import DropDown from '@/components/DropDown'
import { NavItem } from '@/components/NavItem'
import { SocialIcon } from '@/components/SocialIcon'
import { useMediaQuery } from '@/utils/useMediaQuery'
import { PrimaryButton } from '@/components/PrimaryButton'

const metadata: Metadata = {
  title: 'Seasoned Senior',
  description: 'The health care platform',
}

const navItems = ['About', 'Services', 'Senior Events', 'Specialized care', 'How it works', 'Schedule a meeting'];
const footerItems = ['Term of Use', 'Privacy Policy', 'Background Checks', 'Blog', 'Code of Conduct', 'Contact Us'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const isSM = useMediaQuery(1169);
  const [activeNavIndex, setActiveNavIndex] = useState(1);

  return (
    <html lang='en' >
      <body className='font-sans'>
        <header className='relative h-[106px] md:h-auto sm:h-auto bg-primaryBgColor flex justify-between 
                          md:flex-col sm:flex-col 4xl:px-[150px] 3xl:px-[150px] px-[50px] md:py-[20px] sm:py-[20px]'>
          <Image
            alt='logo'
            src='/images/app_logo.png'
            onClick={() => router.push('/')}
            width={isSM ? 160 : 243} height={91} priority={true} className='mt-auto mb-auto' />
          <div className='flex md:flex-col sm:flex-col items-center md:items-start sm:items-start'>
            <button className='text-primary text-bigPrimaryButtonTextSize mr-[50px] md:mr-0 sm:mr-0 
                              md:mt-[20px] md:mb-[20px] sm:mt-[20px] sm:mb-[20px]'>
              Login
            </button>
            <PrimaryButton onClicked={() => { alert('Apply Clicked!'); }}>Apply</PrimaryButton>
          </div>
          <DropDown menuItems={navItems} />
        </header>
        <nav className='h-[81px] bg-secondaryBgColor flex items-center justify-between md:hidden sm:hidden 4xl:px-[129px] px-[50px]'>
          {
            navItems.map((navItem, idx) => {
              return <NavItem
                key={`navItem-${idx}`}
                isLast={idx == navItems.length - 1}
                isActive={idx == activeNavIndex}
                onClicked={() => { router.push(`/${navItem.replace(/\s/g, '').toLowerCase()}`); }}>
                {navItem}
              </NavItem>
            })
          }
        </nav>
        <main className='bg-primaryBgColor'>
          {children}
        </main>
        <footer className='bg-primaryBgColor justify-between flex md:flex-col sm:flex-col 4xl:h-[220px] 3xl:h-[220px] 2xl:h-[220px] h-[auto] py-[50px] 4xl:px-[170px] px-[50px]'>
          <div className='flex flex-col min-w-[243px]'>
            <Image src='/images/app_logo.png' alt='logo' width={isSM? 160 :243} height={91} className='mb-[16px]' />
            <span className='text-center md:text-left sm:text-left whitespace-nowrap text-footerTextSize'>Senior Home Care Agency</span>
          </div>
          <div className='flex flex-col 4xl:max-w-[919px] 3xl:max-w-[919px] 2xl:max-w-[800px] xl:max-w-[600px] lg:max-w-[400px] md:mt-[20px] sm:mt-[20px]'>
            <span className='text-footerDescSize text-footerDescColor leading-[23px]'>Senior care services designed to support and assist elderly individuals who wish to remain in the comfort of their own homes while receiving the care they need. <br /> Our services are delivered by trained professionals, such as caregivers, nurses, or home health aides.</span>
            <div className='4xl:flex 3xl:flex 2xl:flex xl:flex-col lg:flex-col md:flex-col sm:flex-col mt-[40px] xl:mt-[10px] md:mt-[10px] sm:mt-[10px]'>
              {
                footerItems.map((footerItem, idx) => {
                  return <div key={`footerItem-${idx}`} className='text-footerDescSize text-footerDescColor'>{idx != 0 ? <span className='xl:hidden lg:hidden md:hidden sm:hidden 4xl:mx-[30px] 3xl:mx-[30px] 2xl:mx-[15px]'>-</span> : <></>} <span className='4xl:hidden 3xl:hidden 2xl:hidden'>-</span> <Link href={`/${footerItem.toLowerCase().replace(/ /g, '')}`}>{footerItem}</Link></div>;
                })
              }
            </div>
          </div>
          <div className='flex md:mt-[20px] sm:mt-[20px]'>
            <SocialIcon><BsFacebook className='text-white'></BsFacebook></SocialIcon>
            <SocialIcon><BsTwitter className='text-white'></BsTwitter></SocialIcon>
            <SocialIcon><BsInstagram className='text-white'></BsInstagram></SocialIcon>
          </div>
        </footer>
      </body>
    </html >
  )
}

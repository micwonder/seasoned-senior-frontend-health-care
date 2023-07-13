'use client'

import './globals.css'
import Image from 'next/image'
import type { Metadata } from 'next'
import { PrimaryButton } from '@/components/PrimaryButton'
import { NavItem } from '@/components/NavItem'
import { useState } from 'react'
import { SocialIcon } from '@/components/SocialIcon'
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

export const metadata: Metadata = {
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
  const [activeNavIndex, setActiveNavIndex] = useState(1);

  return (
    <html lang="en">
      <body className='font-sans'>
        <header className='h-[106px] bg-primaryBgColor flex justify-between'>
          <Image src='/images/app_logo.png' alt='logo' width={243} height={91} className='ml-[177px] mt-auto mb-auto' />
          <div className='flex items-center mr-[150px]'>
            <button className='text-primary text-primaryButtonTextSize mr-[50px]'>Login</button>
            <PrimaryButton onClicked={() => { alert("Apply Clicked!"); }}>Apply</PrimaryButton>
          </div>
        </header>
        <nav className='h-[81px] bg-secondaryBgColor flex items-center justify-center'>
          {
            navItems.map((navItem, idx) => {
              return <NavItem key={`navItem-${idx}`} isLast={idx == navItems.length - 1} isActive={idx == activeNavIndex} onClicked={() => { alert(`${navItem} Clicked!`) }}>{navItem}</NavItem>
            })
          }
        </nav>
        <main className='bg-primaryBgColor'>
          {children}
        </main>
        <footer className='h-[220px] bg-primaryBgColor flex px-[171px]'>
          <div className='flex flex-col justify-center items-center min-w-[243px]'>
            <Image src='/images/app_logo.png' alt='logo' width={243} height={91} className='mb-[16px]' />
            <span className='text-center whitespace-nowrap text-footerTextSize'>Senior Home Care Agency</span>
          </div>
          <div className='flex flex-col justify-center ml-[100px]'>
            <span className='text-footerDescSize text-footerDescColor leading-[23px]'>Senior care services designed to support and assist elderly individuals who wish to remain in the comfort of their own homes while receiving the care they need. Our services are delivered by trained professionals, such as caregivers, nurses, or home health aides. Our services are delivered by trained professionals, such as caregivers, nurses, or home health aides.</span>
            <div className='flex mt-[40px]'>
              {
                footerItems.map((footerItem, idx) => {
                  return <div key={`footerItem-${idx}`} className='text-footerDescSize text-footerDescColor'>{idx != 0 ? <span className='mx-[30px]'>-</span> : <></>}<Link href={`/${footerItem.toLowerCase().replace(/ /g, "")}`}>{footerItem}</Link></div>;
                })
              }
            </div>
          </div>
          <div className='flex ml-[100px] justify-center items-center'>
            <SocialIcon><BsFacebook className='text-white'></BsFacebook></SocialIcon>
            <SocialIcon><BsTwitter className='text-white'></BsTwitter></SocialIcon>
            <SocialIcon><BsInstagram className='text-white'></BsInstagram></SocialIcon>
          </div>
        </footer>
      </body>
    </html>
  )
}

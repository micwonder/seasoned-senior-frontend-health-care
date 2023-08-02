'use client'

import React from 'react';
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from 'next/link';

import '@/app/globals.css';
import mail_box from "@/public/gifs/mail_box.gif";

const SentMailBox = ({
  href,
}: {
  href: string,
}) => {
  // const modalContent = (
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">

          <div className='m-6 pt-6 text-center text-[32px] text-textdarkColor font-arial'>
            We have sent you an e-mail
          </div>
          <Image
            alt='MailBox'
            src={mail_box}
            className=' mx-auto'
            width={250} height={100} priority={true}
          />
          <div className='text-center text-[16px] font-arial text-distlineColor'>
            Please open email to verify account
          </div>
          <div className="flex justify-center items-center">
            <button className=' mt-10 px-[13px] py-[10px] bg-white  border-primary border-solid border-2 rounded-[4px]'>
              <Link className=' text-center text-primary text-bigPrimaryButtonTextSize sm:text-[20px]' href={href}>Open mail</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  // );
  // return ReactDOM.createPortal(
  //   modalContent,
  //   document.getElementById("modal-root")
  // );
};

SentMailBox.displayName = 'SentMailBox';

export default SentMailBox;

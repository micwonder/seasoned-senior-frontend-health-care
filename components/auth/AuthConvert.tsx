'use client'

import React from 'react';

import '@/app/globals.css';

const AuthConvert = ({
  experssion,
  action,
  href
}: {
  experssion: string,
  action: string,
  href: string,
}) => {
  return (
    <>
      <div className="flex sm:block justify-center gap-[8px]">
        <p className="text-center text-base text-distlineColor">{experssion}</p>
        <a href={href} className='sm:w-full sm:block text-center text-base text-forgotColor hover:underline hover:text-gray-500'>{action}</a>
      </div>
    </>
  );
};

AuthConvert.displayName = 'AuthConvert';

export default AuthConvert;

'use client'

import React from 'react';

import '@/app/globals.css';

const CallAssistance = ({
  experssion,
  action,
}: {
  experssion: string,
  action: string,
}) => {
  return (
    <>
      <div className="flex sm:block justify-center gap-[8px]">
        <p className="text-center text-sm text-distlineColor font-arial">{experssion}</p>
        <a href="#" className='sm:w-full sm:block text-center text-sm text-primary hover:underline hover:text-gray-500 font-arial'>{action}</a>
      </div>
    </>
  );
};

CallAssistance.displayName = 'CallAssistance';

export default CallAssistance;

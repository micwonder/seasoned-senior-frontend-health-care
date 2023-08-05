'use client'

import Link from 'next/link';
import React from 'react';

const InputField = ({
    title,
    placholder,
    type,
    value,
    handleChange
}: {
    title: string,
    placholder: string | undefined,
    type: string,
    value: string,
    handleChange: Function
}) => {
    return (
        <div>
            <div className='text-[12px] font-arial font-[400] text-distlineColor'>
                {title}
            </div>
            <div>
                <input id="inputfield" name="inputfield" type={type} className="peer h-10 w-full bg-white border-[1px] rounded-md border-textdarkColor
                                                                                     text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2 py-6"
                    placeholder={placholder} value={value}
                    onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    );
};

InputField.displayName = 'InputField';

export default InputField;

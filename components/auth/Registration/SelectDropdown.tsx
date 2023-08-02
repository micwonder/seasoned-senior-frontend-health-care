'use client'

import Link from 'next/link';
import React from 'react';

const SelectDropdown = ({

    count,
    isAlignCenter,
    hasCheckbox,
    hasInputBox,
}: {
    count: number,
    isAlignCenter: boolean,
    hasCheckbox: boolean,
    hasInputBox: boolean
}) => {
    // const renderProgressBar = () => {
    //     let elements = [];
    //     for (var i = 0; i < 11; i++) {
    //         if (i < count)
    //             elements.push(<><div className='w-full mx-1  h-[6px] rounded-lg bg-borderGreyColor'></div></>)
    //         else if (i == completeness)
    //             elements.push(<><div className='w-full mx-1  h-[6px] rounded-lg bg-primaryDisabled'></div></>)
    //         else
    //             elements.push(<><div className='w-full mx-1  h-[6px] rounded-lg bg-primary'></div></>)
    //     }
    //     return elements;
    // }

    return (
        
        <>
            <label className="block mb-6">
                <span className="text-gray-700">
                    </span>
                <select
                    name="Gender"
                    className="
                                block
                                w-full
                                mt-1
                                border-gray-300
                                rounded-md
                                shadow-sm
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                            "
                >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Custom meme about me</option>
                    <option>Zoom backgrounds for the rest of my life</option>
                </select>
            </label>
        </>
    );
};

SelectDropdown.displayName = 'SelectDropdown';

export default SelectDropdown;

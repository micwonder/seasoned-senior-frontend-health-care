'use client'

import React, { useState } from "react";

const PrimaryButton = ({
    children,
    onClicked,
}: {
    children: React.ReactNode,
    onClicked: Function,
}) => {
    return (
        <button className='px-[57px] py-[5px] bg-primary rounded-[5px]' onClick={() => onClicked()}>
            <span className='text-primaryButtonTextColor text-bigPrimaryButtonTextSize'>{children}</span>
        </button>
    );
};

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };

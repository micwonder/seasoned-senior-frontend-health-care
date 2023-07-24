import Link from 'next/link';
import React from 'react';

const PrimaryButton = ({
    children,
    href,
}: {
    children: React.ReactNode,
    href: string,
}) => {
    return (
        <button className='px-[57px] sm:px-[37px] py-[5px] bg-primary rounded-[5px]'>
            <Link className='text-primaryButtonTextColor text-bigPrimaryButtonTextSize sm:text-[20px]' href={href}>{children}</Link>
        </button>
    );
};

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };

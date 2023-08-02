'use client'

import Link from 'next/link';
import React from 'react';

const FormPrimaryBtn = ({
    children,
    onClicked,
}: {
    children: React.ReactNode,
    onClicked: Function
}) => {
    return (
        <button
            type="submit"
            className="w-full block bg-primary hover:bg-primaryHover focus:bg-primaryDisabled 
                    text-white rounded-lg px-4 py-4 mt-4 text-loginBtnTextSize font-SFProDisplay"
            onClick={() => onClicked()}>
            {children}
        </button>
    );
};

FormPrimaryBtn.displayName = 'FormPrimaryBtn';

export default FormPrimaryBtn;

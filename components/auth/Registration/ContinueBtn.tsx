'use client'

import Link from 'next/link';
import React from 'react';

const ContinueBtn = ({
    onClicked,
}: {
    onClicked: Function
}) => {
    return (
        <button
            type="submit"
            className="block bg-primary hover:bg-primaryHover focus:bg-primaryDisabled 
                    text-white rounded-lg px-4 py-3 mt-4 mb-9 text-loginBtnTextSize font-arial border-2 border-primary"
            onClick={() => onClicked()}>
                CONTINUE
        </button>
    );
};

ContinueBtn.displayName = 'ContinueBtn';

export default ContinueBtn;

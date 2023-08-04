'use client'

import Link from 'next/link';
import React from 'react';

const SaveExitBtn = ({
    onClicked,
}: {
    onClicked: Function
}) => {
    return (
        <button
            type="submit"
            className="block bg-white hover:bg-primaryHover focus:bg-primaryDisabled 
                    text-primary rounded-lg px-4 py-3 mt-4 mb-9 text-loginBtnTextSize font-arial border-2 border-primary"
            onClick={() => onClicked()}>
                SAVE & EXIT
        </button>
    );
};

SaveExitBtn.displayName = 'SaveExitBtn';

export default SaveExitBtn;

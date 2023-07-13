import React, { useState } from "react"

const NavItem = ({
    isLast,
    isActive,
    children,
    onClicked,
}: {
    isLast: boolean,
    isActive: boolean,
    children: React.ReactNode,
    onClicked: Function,
}) => {
    return (
        <button className={`${isLast ? '' : 'pr-[120px]'}`} onClick={() => onClicked()}>
            <span className={`${!isActive ? 'text-navItemTextColor': 'text-primary underline underline-offset-8'} text-primaryButtonTextSize font-navItem`}>{children}</span>
        </button>
    );
};

NavItem.displayName = "NavItem";

export { NavItem };

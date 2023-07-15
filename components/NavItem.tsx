import React from 'react'

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
        <button onClick={() => onClicked()}>
            <span className={`${!isActive ? 'text-navItemTextColor': 'text-primary underline underline-offset-8'} 4xl:text-bigPrimaryButtonTextSize 3xl:text-bigPrimaryButtonTextSize 2xl:text-bigPrimaryButtonTextSize text-smallPrimaryButtonTextSize font-navItem`}>{children}</span>
        </button>
    );
};

NavItem.displayName = 'NavItem';

export { NavItem };

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const DropDownMenu = ({ menuItems, onClicked }: { menuItems: Array<string>, onClicked: Function }) => {
	const pathname = usePathname();

	return (
		<div
			className={`px-2 md:px-0 py-3 space-y-2 divide-y hidden md:block sm:block divide-primary
									duration-150 transition ease-in-out font-medium text-slate-700 bg-gray-100`}>
			<div className='flex flex-col'>
				{
					menuItems.map((menuItem, idx) => {
						const isActive = pathname.endsWith(menuItem.replace(/\s/g, '').toLowerCase());
						return <Link
							key={`dropdown_menu_item_${idx}`}
							href={'/dashboard/' + menuItem.replace(/\s/g, '').toLowerCase()}
							onClick={() => onClicked()}
							className={`block md:inline-block px-3 py-2 rounded-md text-[20px] font-arial font-normal ${isActive && 'text-primary'}`}>
							{menuItem}
						</Link>
					})
				}
			</div>
			<div className='flex flex-col'>
				<Link
					href=''
					className='block md:inline-block px-3 py-2 rounded-md text-[20px] font-arial font-medium'>
					Login
				</Link>
				<Link
					href=''
					className='block md:inline-block px-3 py-2 rounded-md text-[20px] font-arial font-medium text-primary'>
					Apply
				</Link>
			</div>
		</div>
	);
};

export default DropDownMenu;
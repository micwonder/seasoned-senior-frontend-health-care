'use client'

import Link from 'next/link'

const DropDown = ({ menuItems, onClicked }: { menuItems: Array<string>, onClicked: Function }) => {
	return (
		<div
			className={`px-2 md:px-0 py-3 space-y-2 divide-y hidden md:block sm:block
									duration-150 transition ease-in-out font-medium text-slate-700 bg-white`}>
			<div className='flex flex-col'>
				{
					menuItems.map((menuItem, idx) => {
						return <Link
							key={`dropdown_menu_item_${idx}`}
							href={'./' + menuItem.replace(/\s/g, '').toLowerCase()}
							onClick={() => onClicked()}
							className={`block md:inline-block px-3 py-2 rounded-md text-[20px] font-arial font-[400]`}>
							{menuItem}
						</Link>
					})
				}
			</div>
			<div className='flex flex-col'>
				<Link
					href=''
					className='block md:inline-block px-3 py-2 rounded-md text-[20px] font-arial font-[500]'>
					Login
				</Link>
				<Link
					href=''
					className='block md:inline-block px-3 py-2 rounded-md text-[20px] font-arial font-[500] text-primary'>
					Apply
				</Link>
			</div>
		</div>
	);
};

export default DropDown;
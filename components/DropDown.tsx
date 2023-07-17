'use client'

import Link from 'next/link'
import { useState } from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener'

const DropDown = ({ menuItems }: { menuItems: Array<string> }) => {
	const [isOpened, setIsOpened] = useState(false);

	const handleClickAway = () => {
		setIsOpened(false);
	}

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<div className='absolute hidden md:flex sm:flex flex-col right-[50px] top-[20px]'>
				<button
					onClick={() => setIsOpened(!isOpened)}
					className={`inline-flex p-2 text-sm font-medium text-gray-900 rounded-lg ml-auto`}>
					<svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 3'>
						<path
							d='M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' />
					</svg>
				</button>

				<div className={`${!isOpened ? 'hidden' : ''} z-10 bg-white divide-y 
								divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
					<ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownMenuIconHorizontalButton'>
						{
							menuItems.map((menuItem, idx) => {
								return <li key={`dropdown_menu_item_${idx}`}>
									<Link
										href={'./' + menuItem.replace(/\s/g, '').toLowerCase()}
										onClick={() => setIsOpened(false)}
										className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
										{menuItem}
									</Link>
								</li>
							})
						}
					</ul>
				</div>
			</div>
		</ClickAwayListener>
	);
};

export default DropDown;
const ToogleButton = ({ onClicked }: { onClicked: Function }) => {
	return (
		<button
			type='button'
			className={`w-[50px] h-[50px] my-auto bg-primary hidden md:inline-flex sm:inline-flex 
									items-center justify-center p-2 rounded-md text-white transition duration-150 ease-in-out `}
			onClick={() => onClicked()}>
			<svg
				className='h-6 w-6'
				stroke='currentColor'
				fill='none'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M4 6h16M4 12h16M4 18h16'
				></path>
			</svg>
		</button>
	);
}

export default ToogleButton;
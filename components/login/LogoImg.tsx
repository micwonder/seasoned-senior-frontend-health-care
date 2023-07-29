import Image from 'next/image'
const LogoImg = ({ onClicked }: { onClicked: Function }) => {
	return (
        <Image
        alt='logo'
        src='/images/app_logo.png'
        className='mt-[29px] ml-[40px] h-auto cursor-pointer'
        width={243} height={91} priority={true} />
	);
}

export default LogoImg;
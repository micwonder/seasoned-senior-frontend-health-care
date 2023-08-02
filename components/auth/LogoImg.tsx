import Image from 'next/image'
import app_logo from "@/public/icons/app_logo.svg";
const LogoImg = ({ onClicked }: { onClicked: Function }) => {
	return (
		<Image
			alt='logo'
			src={app_logo}
			className='top-[27px] left-[41px] h-auto cursor-pointer absolute z-10'
			width={143} height={56} priority={true} />
	);
}

export default LogoImg;
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'


import arrow_back from "@/public/icons/arrow_back.svg";
const BackBtn = ({ onClicked }: { onClicked: Function }) => {
    const router = useRouter();
    return (
        <div className='flex cursor-pointer'>
            <Image
                alt='back'
                src={arrow_back}
                onClick={() => router.push('/')}
                width={24} height={24} />
            <p className='ml-1 text-16px font-[400] font-arial text-distlineColor'>
                Back
            </p>
        </div>
    );
}

export default BackBtn;
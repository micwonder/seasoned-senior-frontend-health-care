import Image from 'next/image'


import arrow_back from "@/public/icons/arrow_back.svg";
const BackBtn = ({ onClicked }: { onClicked: Function }) => {
    return (
        <div className='flex cursor-pointer'>
            <Image
                alt='back'
                src={arrow_back}
                onClick={() => onClicked()}
                width={24} height={24} />
            <p className='ml-1 text-16px font-[400] font-arial text-distlineColor'>
                Back
            </p>
        </div>
    );
}

export default BackBtn;
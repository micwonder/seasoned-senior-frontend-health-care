import Image from 'next/image'


import arrow_back from "@/public/icons/arrow_back.svg";
const BackBtn = ({ onClicked }: { onClicked: Function }) => {
    return (
        <div className='flex cursor-pointer' onClick={() => onClicked()}>
            <Image
                alt='back'
                src={arrow_back}
                width={24} height={24} />
            <p className='ml-1 text-[16px] font-normal font-arial text-distlineColor'>
                Back
            </p>
        </div>
    );
}

export default BackBtn;
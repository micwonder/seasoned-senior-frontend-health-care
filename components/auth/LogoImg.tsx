import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import app_logo from "@/public/icons/app_logo.svg";
const LogoImg = ({ onClicked }: { onClicked: Function }) => {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      src={app_logo}
      onClick={() => router.push("/")}
      className="top-[27px] left-[41px] h-auto cursor-pointer absolute z-10"
      width={143}
      height={56}
      priority={true}
    />
  );
};

export default LogoImg;

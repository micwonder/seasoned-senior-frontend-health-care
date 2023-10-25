import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    transform={`scale(${(Number(props.width) || 25) / 25}) rotate(${Number(
      props.rotate || 0
    )})`}
    width={25}
    height={26}
    fill="none"
  >
    <path
      fill={props.color}
      d="M5.57 10.6a1.259 1.259 0 0 1 1.783-.003l3.793 3.793a1.54 1.54 0 0 0 2.177 0l3.793-3.793a1.259 1.259 0 0 1 1.78 1.78l-5.573 5.574a1.54 1.54 0 0 1-2.178 0l-5.572-5.573a1.259 1.259 0 0 1-.004-1.777Z"
    />
  </svg>
);
export default SvgComponent;

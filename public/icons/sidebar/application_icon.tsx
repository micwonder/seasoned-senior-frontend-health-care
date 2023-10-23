import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <path
      fill={props.color}
      stroke={props.color}
      strokeWidth={0.75}
      d="M19.875 1.875h2.25v2.25h-2.25v-2.25Zm0 4.5h2.25v2.25h-2.25v-2.25Zm-4.5-4.5h2.25v2.25h-2.25v-2.25Zm0 4.5h2.25v2.25h-2.25v-2.25Z"
    />
    <path
      fill={props.color}
      d="M21 12v4.5H3v-12h9V3H3a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 0 3 18h6v3H6v1.5h12V21h-3v-3h6a1.5 1.5 0 0 0 1.5-1.5V12H21Zm-7.5 9h-3v-3h3v3Z"
    />
  </svg>
);
export default SvgComponent;

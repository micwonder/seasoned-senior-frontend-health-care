import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <g clipPath="url(#a)">
      <path
        stroke={props.color}
        strokeWidth={2}
        d="M6 9a3 3 0 0 0 3-3M6 9a3 3 0 0 1-3-3m3 3v3m3-6a3 3 0 0 0-3-3m3 3h3M6 3a3 3 0 0 0-3 3m3-3V0M3 6H0m2-4 2 2m4 4 2 2m0-8L8 4M4 8l-2 2m16 2a3 3 0 0 0 3-3m-3 3a3 3 0 0 1-3-3m3 3v3m3-6a3 3 0 0 0-3-3m3 3h3m-6-3a3 3 0 0 0-3 3m3-3V3m-3 6h-3m2-4 2 2m4 4 2 2m0-8-2 2m-4 4-2 2m-5 8a3 3 0 0 0 3-3m-3 3a3 3 0 0 1-3-3m3 3v3m3-6a3 3 0 0 0-3-3m3 3h3m-6-3a3 3 0 0 0-3 3m3-3v-3m-3 6H3m2-4 2 2m4 4 2 2m0-8-2 2m-4 4-2 2"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;

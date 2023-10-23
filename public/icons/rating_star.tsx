import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none">
    <g clipPath="url(#a)">
      <rect width={23.964} height={23.964} x={0.807} y={0.89} rx={7.988} />
      <path
        fillOpacity={props.opacity}
        fill="#FFC000"
        d="M10.612 7.588c.685-2.108 3.668-2.108 4.353 0a2.288 2.288 0 0 0 2.177 1.581c2.216 0 3.138 2.837 1.345 4.14a2.288 2.288 0 0 0-.832 2.558c.685 2.109-1.728 3.862-3.521 2.559a2.288 2.288 0 0 0-2.69 0c-1.794 1.303-4.207-.45-3.522-2.559a2.288 2.288 0 0 0-.831-2.558c-1.794-1.303-.872-4.14 1.345-4.14.991 0 1.87-.638 2.176-1.581Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={23.964} height={23.964} x={0.807} y={0.89} rx={7.988} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;

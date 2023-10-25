import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none">
    <circle cx={6.217} cy={6.433} r={6} fill={props.color} />
  </svg>
);
export default SvgComponent;

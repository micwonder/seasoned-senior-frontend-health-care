import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 493}
    height={3}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "#F6F6F6"}
      strokeWidth={props.strokeWidth || 1}
      d={`M.81 1.5h ${props.width || 493}`}
    />
  </svg>
);
export default SvgComponent;

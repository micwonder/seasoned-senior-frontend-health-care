import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={3}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeWidth={1.662}
      d={`M1.217.595v${props.height}`}
    />
  </svg>
);
export default SvgComponent;

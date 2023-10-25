import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={23}
    fill="none"
    {...props}
  >
    <circle cx={8.841} cy={8.939} r={8.008} fill="#CB5A6F" />
    <circle cx={8.841} cy={8.938} r={4.312} fill="#fff" />
    <path
      fill="#CB5A6F"
      d="m5.529 13.251 4.76 1.276-2.232 8.33-2.061-1.828-2.7.552 2.233-8.33Z"
    />
    <path
      fill="#CB5A6F"
      d="m12.985 13.251-4.76 1.276 2.232 8.33 2.061-1.828 2.699.552-2.232-8.33Z"
    />
  </svg>
);
export default SvgComponent;

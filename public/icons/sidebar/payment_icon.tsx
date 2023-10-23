import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.714}
      d="M7.715 18h6.6a2.829 2.829 0 0 0 .548-5.606l-5.726-.789A2.829 2.829 0 0 1 9.686 6h6.6M12 23.143V.857"
    />
  </svg>
);
export default SvgComponent;

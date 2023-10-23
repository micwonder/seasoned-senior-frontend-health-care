import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    transform={`scale(${(Number(props.width) ?? 25) / 25})`}
    width={25}
    height={25}
  >
    <path
      fill={props.color}
      d="M12.5 22.807c-5.92 0-10.733-4.813-10.733-10.734S6.579 1.339 12.5 1.339c5.92 0 10.734 4.813 10.734 10.734S18.422 22.807 12.5 22.807Zm0-19.97c-5.092 0-9.236 4.143-9.236 9.236 0 5.092 4.144 9.236 9.237 9.236 5.092 0 9.236-4.144 9.236-9.236 0-5.093-4.144-9.236-9.236-9.236Z"
    />
    <path
      fill={props.color}
      d="M16.204 15.997c-.13 0-.26-.03-.379-.11L12.73 14.04c-.77-.46-1.338-1.468-1.338-2.356V7.59c0-.41.34-.75.748-.75.41 0 .75.34.75.75v4.094c0 .36.299.888.608 1.068l3.096 1.847c.36.21.47.67.26 1.029a.77.77 0 0 1-.65.37Z"
    />
  </svg>
);
export default SvgComponent;

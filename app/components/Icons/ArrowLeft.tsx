import { SVGProps } from "react";

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#252525"
      d="M7.295 15.716A1 1 0 0 0 8.7 14.291L3.33 9h13.67a1 1 0 1 0 0-2H3.336L8.7 1.715A1 1 0 1 0 7.295.29L.371 7.113a1.25 1.25 0 0 0 0 1.78l6.924 6.823Z"
    />
  </svg>
);

export default ArrowLeftIcon;

import { SVGProps } from "react";

const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M3.276 7.934a.632.632 0 1 0 .917.868l4.173-4.411v10.714a.632.632 0 0 0 1.263 0V4.39l4.175 4.413a.632.632 0 0 0 .917-.868L9.611 2.53a.838.838 0 0 0-.478-.252.633.633 0 0 0-.277.001.838.838 0 0 0-.47.251l-5.11 5.404Z"
    />
  </svg>
);

export default ArrowUpIcon;

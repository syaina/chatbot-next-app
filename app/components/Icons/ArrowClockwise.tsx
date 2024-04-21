import { SVGProps } from "react";

const ArrowClockwiseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#FAFAFA"
      d="M2.35 5.5a3.684 3.684 0 0 1 6.61-1.695l.066.09h-1.71a.263.263 0 1 0 0 .526H9.42a.263.263 0 0 0 .263-.263V2.053a.263.263 0 1 0-.526 0v1.161a4.21 4.21 0 1 0 1.045 2.513.263.263 0 0 0-.525.034A3.684 3.684 0 1 1 2.35 5.5Z"
    />
  </svg>
);

export default ArrowClockwiseIcon;

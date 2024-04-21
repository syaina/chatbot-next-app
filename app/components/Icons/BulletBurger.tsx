import { SVGProps } from "react";

const BulletBurger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={4}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#252525"
      d="M2 3.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Zm0 6a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM.25 14a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z"
    />
  </svg>
);

export default BulletBurger;

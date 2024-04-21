import { SVGProps } from "react";

const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#E62C46"
      d="M6.5 3h3a1.5 1.5 0 1 0-3 0Zm-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 10.272 17H5.728a3 3 0 0 1-2.98-2.656L1.554 4H.5a.5.5 0 0 1 0-1h5ZM3.741 14.23A2 2 0 0 0 5.728 16h4.544a2 2 0 0 0 1.987-1.77L13.439 4H2.561l1.18 10.23ZM6.5 6.5A.5.5 0 0 1 7 7v6a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5ZM10 7a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V7Z"
    />
  </svg>
);

export default TrashIcon;

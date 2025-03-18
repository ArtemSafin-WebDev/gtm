import { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};
const UserIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    {...props}
    viewBox="0 0 18 18"
  >
    <path
      fillRule="evenodd"
      d="M13.204 4.798c0 2.615-1.746 4.735-3.9 4.735-2.153 0-3.9-2.12-3.9-4.735 0-3.627 1.747-4.735 3.9-4.735 2.154 0 3.9 1.108 3.9 4.735Zm2.744 7.107 1.967 4.598c.136.317.108.68-.074.97a.972.972 0 0 1-.825.465H1.592a.972.972 0 0 1-.824-.465 1.05 1.05 0 0 1-.075-.97l1.968-4.598c.09-.21.248-.385.445-.491l3.053-1.65a.191.191 0 0 1 .21.02 4.725 4.725 0 0 0 2.935 1.035 4.725 4.725 0 0 0 2.937-1.036.19.19 0 0 1 .209-.018l3.053 1.649c.197.106.355.28.445.49Z"
      clipRule="evenodd"
    />
  </svg>
);
export default UserIcon;

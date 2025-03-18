import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};
const NavDashIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={28}
    viewBox="0 0 20 28"
    {...props}
  >
    <path d="M8.889 0H20l-8.333 28H0L8.889 0Z" />
  </svg>
);
export default NavDashIcon;

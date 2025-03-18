import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};
const ArrowDownIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 12 12"
    {...props}
  >
    <path d="M5.47 9.53a.751.751 0 0 0 1.062 0l4.5-4.5A.751.751 0 0 0 9.97 3.968L6 7.938 2.03 3.97A.751.751 0 0 0 .967 5.032l4.5 4.5.002-.002Z" />
  </svg>
);
export default ArrowDownIcon;

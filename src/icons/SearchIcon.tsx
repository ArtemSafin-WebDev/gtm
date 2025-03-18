import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};
const SearchIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M13 6.5c0 1.434-.466 2.76-1.25 3.834l3.956 3.96a1.002 1.002 0 0 1-1.415 1.415l-3.957-3.959A6.463 6.463 0 0 1 6.5 13C2.91 13 0 10.09 0 6.5S2.91 0 6.5 0 13 2.91 13 6.5ZM6.5 11a4.5 4.5 0 1 0 0-9.002A4.5 4.5 0 0 0 6.5 11Z" />
  </svg>
);
export default SearchIcon;

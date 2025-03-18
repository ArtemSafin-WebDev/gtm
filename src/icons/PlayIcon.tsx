import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const PlayIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    viewBox="0 0 41 41"
    {...props}
  >
    <path d="M17.4 13.393a1.495 1.495 0 0 0-1.515-.028 1.503 1.503 0 0 0-.766 1.309v11c0 .544.294 1.044.766 1.31a1.503 1.503 0 0 0 1.515-.029l9-5.5a1.5 1.5 0 0 0 0-2.563l-9-5.5Z" />
  </svg>
);
export default PlayIcon;

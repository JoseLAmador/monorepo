import React from "react";

type IconProps = {
  width: number;
  className?: string;
}

const ArrowDown = ({ width, className }: IconProps) => {
  return <svg width={width} className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.414 44.414a2 2 0 01-2.828 0l-22-22a2 2 0 112.828-2.828L32 40.172l20.586-20.586a2 2 0 112.828 2.828l-22 22z" fill="fillCurrent"/></svg>;
}

export default ArrowDown;

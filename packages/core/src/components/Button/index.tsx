import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button type="button" className="py-4 px-5 text-lg bg-primary-500 font-bold">{children}</button>
  )
}

export default Button;

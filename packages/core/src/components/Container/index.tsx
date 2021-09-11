import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto px-4 container">{children}</div>
  )
}

export default Container;

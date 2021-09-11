import React from 'react';

interface AlertProps {
  message?: string,
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <div className="py-5 px-8" role="alert">{message ? message : 'This is an alert!'}</div>
  )
}

export default Alert;

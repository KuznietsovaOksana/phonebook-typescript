import React from 'react';

interface Props {
  type: string;
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  radius: string;
  width: string;
  cursor: string;
}

const Button: React.FC<Props> = ({
  type,
  border,
  color,
  children,
  height,
  radius,
  width,
  cursor,
}) => {
  return (
    <button
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        cursor,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

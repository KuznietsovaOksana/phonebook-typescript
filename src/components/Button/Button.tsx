import React from 'react';

interface Props {
  radius: string;
  type: string;
  border: string;
  color: string;
  height: string;
  width: string;
  children: React.ReactNode;
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

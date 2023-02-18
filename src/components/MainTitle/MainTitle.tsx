import React from 'react';

interface IProps {
  title: string;
}

export const MainTitle = ({ title }: IProps) => {
  return <h1>{title}</h1>;
};

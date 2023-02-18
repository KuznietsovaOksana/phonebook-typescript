import React from 'react';

interface IProps {
  title: string;
}

export const Title = ({ title }: IProps) => {
  return <h2>{title}</h2>;
};

import React from 'react';

interface MyHeaderProps {
  title: string;
}

const MyHeader: React.FC<MyHeaderProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default MyHeader;

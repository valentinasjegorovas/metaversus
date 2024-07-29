import React from 'react';
import { ReactNode } from 'react';

interface TitleProps {
  text: ReactNode;
  style: string;
}

const Title: React.FC<TitleProps> = ({ text, style }) => {
  return (
    <h2
      className={`${style} font-bold text-[64px] text-white mobile:text-[40px]`}
    >
      {text}
    </h2>
  );
};

export default Title;

import React from 'react';

interface SubtitleProps {
  text: string;
  style: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, style }) => {
  return <p className={`${style} text-grey font-medium text-[14px]`}>{text}</p>;
};

export default Subtitle;

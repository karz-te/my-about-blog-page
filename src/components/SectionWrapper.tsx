import React from 'react';

interface Props {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<Props> = ({ children }) => {
  return <div className="space-y-12">{children}</div>;
};

export default SectionWrapper;

import React from 'react';

interface Props {
  title: string;
  content: string;
}

const AboutSection: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 my-10">
      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4 border-b border-gray-300 text-gray-800 animate-fade-in">
        {title}
      </h2>
      <p className="custom-paragraph text-base sm:text-lg font-bold text-gray-800">
        {content}
      </p>
    </div>
  );
};

export default AboutSection;

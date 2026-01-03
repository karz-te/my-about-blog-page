import React from 'react';

interface Props {
  title: string;
  content: string;
}

const AboutSection: React.FC<Props> = ({ title, content }) => {
  return (
    <section className="w-full px-4 my-12">
      <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 border-b border-gray-300 text-gray-800 animate-fade-in">
        {title}
      </h2>
      <p className="custom-paragraph whitespace-pre-line text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
        {content}
      </p>
    </section>
  );
};

export default AboutSection;


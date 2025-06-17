import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-white py-10">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-[28px] font-bold leading-snug text-center font-title fade-in-down">
          Designing Myself
          <br />
        </h1>
          <span className="block text-base sm:text-lg text-gray-100 mt-1 font-heading fade-in-down-delay">
            輪郭のない設計図
          </span>
        <p className="mt-4 text-sm sm:text-base font-medium text-shadow leading-relaxed font-heading">
          “変わり続けること”に価値をおき、自らの体験を通じて、<br />
          “人生を主体的に歩む力”を発信。
        </p>
      </div>
    </section>
  );
};

export default AboutHero;

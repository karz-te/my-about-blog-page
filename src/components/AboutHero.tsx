import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/70 py-10">
      {/* subtle grid/noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] hero-grid" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] hero-noise" />

      <div className="relative px-6 text-center">
        {/* concept pill -> keep it single-purpose */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs text-emerald-800">
          <span className="font-heading tracking-wide">ABOUT</span>
          <span className="text-emerald-400">•</span>
          <span className="opacity-80">輪郭のない設計図</span>
        </div>

        <h1 className="mt-4 text-[28px] sm:text-[32px] font-bold leading-snug font-title fade-in-down text-gray-900">
          Designing Myself
        </h1>

        <span className="block text-base sm:text-lg text-gray-700 mt-1 font-heading fade-in-down-delay">
          輪郭のない設計図
        </span>

        {/* scanning underline (quiet gimmick) */}
        <div className="mx-auto mt-4 h-[2px] w-[min(520px,85%)] overflow-hidden rounded-full bg-emerald-200/60">
          <div className="h-full w-[40%] hero-scan" />
        </div>

        <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed font-heading text-gray-700">
          “変わり続けること”に価値をおき、自らの体験を通じて、
          <br className="hidden sm:block" />
          “人生を主体的に歩む力”を発信。
        </p>
      </div>
    </section>
  );
};

export default AboutHero;

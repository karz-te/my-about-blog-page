import React from 'react';
import AboutHero from '@/components/AboutHero';
import AboutSection from '@/components/AboutSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Metadata } from 'next';
import ProfileCard from '@/components/ProfileCard';
import BackToHomeButton from '@/components/BackToHomeButton';

export const metadata: Metadata = {
  title: 'About - Designing Myself',
  description: '変わり続けることに価値をおき、自らの体験を通じて、人生を主体的に歩む力を発信するブログです。',
};

export default function AboutPage() {
  return (
    <main className="bg-[#fdfdfd] text-gray-800 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <AboutHero />
        <SectionWrapper>
          <AboutSection
            title="はじめまして"
            content={`このページに訪れていただき、ありがとうございます。私は、変わり続けることに価値を見出しながら、自分自身の道を歩んでいます。このブログは、そんな私の内面の記録であり、思索と体験のアーカイブです。`}
          />
          <AboutSection
            title="輪郭のない設計図"
            content={`「人生は、未完成で曖昧なまま進んでもいい」そんな感覚から、このブログタイトルは生まれました。`}
          />
          <AboutSection
            title="体験から学んだこと"
            content={`私は一貫したキャリアを歩んだわけではありません。むしろ、挫折や迷いの連続でした。`}
          />
          <AboutSection
            title="このブログの目的"
            content={`このブログは、共感よりも、自分の実体験・内省・探求に基づいたE-E-A-Tを重視しています。`}
          />
          <ProfileCard />
          <BackToHomeButton />
        </SectionWrapper>
      </div>
    </main>
  );
}

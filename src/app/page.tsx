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
            content={`訪れてくださり、ありがとうございます。\nここは、わたしの「経験」と「思索」を重ねていく場所です。\n共感だけで終わらせず、体験の背景や、そこで得た判断の軸まで一緒に残します。\n読者の方が、ご自身の状況に照らして考える材料になれば嬉しいです。`}
          />
          <AboutSection
            title="輪郭のない設計図"
            content={`輪郭のない設計図とは、矛盾を抱えたまま生きる人間の姿を指しています。\n目指す方向はあるのに、感情や体調、現実の条件は揺れ動きます。\n設計図は、きれいに完成させるものではなく、何度も描き直すものになります。\nわたしは、人は自分で書き換えながらアップデートできると考えています。\nこの場所では、その更新のプロセスを残しています。`}
          />
          <AboutSection
            title="現場の4軸と通底するロジック"
            content={
              'これまで、4つの異なる現場を歩いてきました。\n半導体、物流、光学（レンズ成形）、リサイクル。\n業界は違っても、共通していたのは「制約の中で、意思決定を壊さない」ことです。\n測定し、再現性を追い、改善を重ねる。泥臭いですが、最も嘘のないこのアプローチは、いまの文章や制作物の設計原則になっています。'
            }
          />
          <AboutSection
            title="作っているもの"
            content={
              '文章だけで終わらせず、ワークシートやツール、Webアプリの形にもしています。\n読む ⇒ 試す ⇒ 振り返る。\n紙の上で分かったつもりでも、現実はだいたいズレます。\nそのズレを確かめられる入口を作り、少しずつ更新しています。\nこの往復運動ができると、内省は「気分」ではなく「技術」になります。'
            }
          />
          <AboutSection
            title="この場所で大切にしていること"
            content={
              'ここでは、体験を語って終わりにはしません。\n「なぜそうなったか」「何が揺れたか」「何を基準に判断したか」まで残します。\n言い切りすぎないこと。\nでも、曖昧なまま放置もしないこと。\n必要なら測り、確かめ、書き換える。\n矛盾を抱えたままでも、歩き直せる。\nそのための“設計”を、言葉と制作の両方で続けていきます。'
            }
          />
          <ProfileCard />
          <BackToHomeButton />
        </SectionWrapper>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif_JP, Orbitron, Playfair_Display } from 'next/font/google';

const bodyFont = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-body',
});

const headingFont = Orbitron({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
  variable: '--font-heading',
});

const titleFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-title',
});

export const metadata: Metadata = {
  title: "Designing Myself - 輪郭のない設計図",
  description: "変わり続けることに価値をおき、自らの体験を通じて、人生を主体的に歩む力を発信するブログ。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${bodyFont.variable} ${headingFont.variable} ${titleFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#fdfdfd] text-gray-800 font-sans">
        <main className="min-h-screen flex flex-col items-center px-4">
          {children}
        </main>
        <footer className="bg-blue-900 text-sm text-white text-center py-6 shadow-inner relative">
          <p className="text-shadow text-base font-semibold tracking-wide inline-flex items-center gap-2">
            © 2025 Designing Myself
            <img src="/favicon.ico" alt="icon" className="w-5 h-5" />
          </p>
        </footer>
      </body>
    </html>
  );
}


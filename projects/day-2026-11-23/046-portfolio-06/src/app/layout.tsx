import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "건축가 포트폴리오",
  description: "설계한 건축물을 소개하고, 프로젝트별로 사진과 설명을 함께 보여준다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

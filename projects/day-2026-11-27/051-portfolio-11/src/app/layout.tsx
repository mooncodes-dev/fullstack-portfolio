import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "SNS 마케터 포트폴리오",
  description: "SNS에서 진행한 캠페인 성과와 사례를 소개하고, 캠페인 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

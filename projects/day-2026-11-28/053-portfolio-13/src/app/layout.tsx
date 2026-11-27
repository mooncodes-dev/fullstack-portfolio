import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "웨딩 플래너 포트폴리오",
  description: "기획한 웨딩과 장식 사례를 보여주고, 사례 제목으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "결혼식 축가 모음",
  description: "결혼식 축가로 부르기 좋은 노래를 소개하고, 축가 이름으로 곡을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "마크다운 블로그",
  description: "본문을 마크다운 문법으로 쓰면 HTML로 변환해 보여주는 블로그입니다. 원본 마크다운은 DB에 저장하고, 미리보기 기능도 함께 구현하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

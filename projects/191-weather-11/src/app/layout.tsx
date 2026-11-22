import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "지역별 날씨 게시판 사이트",
  description: "동네별로 게시판을 만들어 주민들이 체감 날씨를 글로 남기는 사이트입니다. 글은 지역별로 DB에 저장되고 사진 첨부도 가능합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

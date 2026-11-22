import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "오늘의 한마디가 바뀌는 소개 페이지",
  description: "매일 다른 동기부여 문구나 오늘의 목표를 보여주는 페이지입니다. 문구는 DB에 여러 개 저장해두고 날짜를 기준으로 하나씩 골라 보여주며, 관리자가 문구를 CRUD할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

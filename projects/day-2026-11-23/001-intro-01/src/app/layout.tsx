import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 하루 일과 타임테이블 소개 페이지",
  description: "하루 일정을 시간대별로 소개하고, 방문자가 일정 항목에 좋아요를 남길 수 있다. 일정은 데이터베이스에 저장되어 수정과 삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

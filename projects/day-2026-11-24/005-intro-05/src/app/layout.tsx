import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 공부 인증샷 일지 소개 페이지",
  description: "매일 공부한 내용을 인증샷과 함께 기록하고, 방문자가 댓글로 응원 메시지를 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

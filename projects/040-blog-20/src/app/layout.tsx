import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "예약 발행 블로그",
  description: "글을 원하는 날짜와 시간에 자동으로 공개되게 하세요. 예약 시각을 DB에 저장하고, 서버가 시간이 된 글을 발행 상태로 바꾸는 방식을 구현합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

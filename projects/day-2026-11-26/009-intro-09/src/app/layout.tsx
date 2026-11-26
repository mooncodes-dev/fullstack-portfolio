import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 출퇴근 시간 활용 소개 페이지",
  description: "출퇴근 시간을 활용하는 방법을 소개하고, 방문자가 방법에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

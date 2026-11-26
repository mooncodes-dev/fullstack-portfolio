import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "체력 테스트 기록",
  description: "체력 테스트의 종목별 결과를 기록하고, 테스트 날짜로 기록을 검색할 수 있다. 방문자가 기록에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

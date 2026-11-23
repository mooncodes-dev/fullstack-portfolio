import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "신혼여행 일지 사이트",
  description: "신혼여행의 일정과 추억을 기록하는 사이트이다. 신혼여행지에 좋아요를 눌러 인기 여행지를 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "남해 드라이브 코스 기록",
  description: "남해의 드라이브 코스를 소개하고, 코스 이름으로 기록을 검색할 수 있다. 방문자가 코스에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "시니어 운동 페이지",
  description: "어르신을 위한 가벼운 운동을 소개하고, 운동을 난이도별로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

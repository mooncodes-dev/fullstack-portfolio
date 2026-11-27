import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스포츠 경기 기록 페이지",
  description: "참여한 스포츠 경기 결과를 기록하고, 경기 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

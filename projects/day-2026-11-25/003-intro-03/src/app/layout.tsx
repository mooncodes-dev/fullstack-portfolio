import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 독서 습관 기록 소개 페이지",
  description: "읽은 책과 독서 시간을 기록하고, 책 제목으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

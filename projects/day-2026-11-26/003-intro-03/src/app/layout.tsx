import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 여행 버킷리스트 소개 페이지",
  description: "가보고 싶은 여행지를 버킷리스트로 소개하고, 여행지 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "배드민턴 기록 페이지",
  description: "배드민턴 경기 결과와 연습 내용을 기록하고, 기록 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

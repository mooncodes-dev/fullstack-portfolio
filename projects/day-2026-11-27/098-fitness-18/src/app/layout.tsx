import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "발레 연습 기록 페이지",
  description: "발레 연습 동작과 진도를 기록하고, 연습 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

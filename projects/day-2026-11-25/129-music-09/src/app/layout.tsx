import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "보컬 연습곡 모음",
  description: "보컬 연습에 좋은 곡을 소개하고, 연습 영상을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "육아 일기 블로그",
  description: "아이의 성장 기록을 사진과 함께 올리고, 월령별로 글을 모아볼 수 있다. 사진은 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

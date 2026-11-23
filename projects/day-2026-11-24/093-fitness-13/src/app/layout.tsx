import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "골프 연습 기록 페이지",
  description: "골프 연습장의 타수와 스윙 메모를 기록하고, 연습 영상을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

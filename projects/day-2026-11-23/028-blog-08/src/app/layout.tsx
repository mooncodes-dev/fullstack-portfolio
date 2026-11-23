import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "사진 일기 블로그",
  description: "찍은 사진과 짧은 글을 함께 올리고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

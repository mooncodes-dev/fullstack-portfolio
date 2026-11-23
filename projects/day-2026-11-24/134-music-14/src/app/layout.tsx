import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "피아노 연주 기록 플랫폼",
  description: "피아노 연주 연습과 곡을 기록하는 플랫폼이다. 연주 영상을 파일 업로드로 올려 연습 과정을 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

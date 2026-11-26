import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "뮤지션 앨범 포트폴리오",
  description: "발표한 앨범과 수록곡을 소개하고, 앨범 사진을 파일로 업로드할 수 있다. 방문자가 앨범에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

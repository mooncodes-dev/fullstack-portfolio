import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "추억의 노래 공유 플랫폼",
  description: "추억이 담긴 노래를 공유하고, 노래 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

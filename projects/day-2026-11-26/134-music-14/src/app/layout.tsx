import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "봄 소풍 음악 모음",
  description: "봄 소풍에 어울리는 음악을 소개하고, 곡 목록을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

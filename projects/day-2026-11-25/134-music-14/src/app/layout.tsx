import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "버스킹 곡 목록",
  description: "버스킹에서 부르기 좋은 곡을 소개하고, 곡 목록을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

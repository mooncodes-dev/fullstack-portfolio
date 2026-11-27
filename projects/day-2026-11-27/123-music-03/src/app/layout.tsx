import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "비 오는 날 음악 공유",
  description: "비 오는 날 듣는 곡을 모아 공유하고, 곡 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

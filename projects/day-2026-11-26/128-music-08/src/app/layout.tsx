import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "러닝 비트 음악 추천",
  description: "달릴 때 듣는 비트 있는 음악을 추천하고, 곡 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

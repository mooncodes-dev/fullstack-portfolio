import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "산골 마을 여행 일지",
  description: "산골 마을 여행 기록을 공유하고, 마을 이름으로 일지를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

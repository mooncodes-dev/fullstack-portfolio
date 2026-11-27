import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계곡 여행 일지",
  description: "여름 계곡 여행 기록을 공유하고, 계곡 이름으로 일지를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "통영 섬 여행 기록",
  description: "통영의 섬과 케이블카를 기록하고, 섬 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

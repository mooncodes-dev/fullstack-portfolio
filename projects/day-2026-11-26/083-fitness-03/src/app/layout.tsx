import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "홈 요가 루틴 공유",
  description: "집에서 하는 요가 루틴을 공유하고, 동작 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

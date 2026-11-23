import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "근력 목표 달성 기록 페이지",
  description: "목표 무게와 달성 과정을 기록하고, 목표를 검색해 기록을 찾을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

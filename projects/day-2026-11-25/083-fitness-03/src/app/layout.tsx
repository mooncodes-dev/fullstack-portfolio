import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "러닝 대회 준비 기록",
  description: "러닝 대회 준비 과정과 기록을 정리하고, 대회 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

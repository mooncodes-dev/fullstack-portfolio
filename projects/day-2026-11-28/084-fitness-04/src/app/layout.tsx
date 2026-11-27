import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "러닝 대회 준비 페이지",
  description: "참가할 러닝 대회의 훈련 계획을 기록하고, 대회 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

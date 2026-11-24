import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자전거 라이딩 코스 공유",
  description: "라이딩 코스와 거리를 공유하고, 코스 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

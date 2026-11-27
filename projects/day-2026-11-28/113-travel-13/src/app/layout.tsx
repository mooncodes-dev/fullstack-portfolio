import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "대만 야시장 여행 페이지",
  description: "대만의 야시장 먹거리와 볼거리를 기록하고, 야시장 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

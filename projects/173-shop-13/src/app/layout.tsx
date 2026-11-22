import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "최근 본 상품 상점",
  description: "내가 본 상품이 자동으로 기록되어 다시 보여주는 상점입니다. 조회 기록을 사용자별로 DB에 저장하고 오래된 기록은 정리합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

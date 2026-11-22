import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "찜하기 상점",
  description: "마음에 드는 상품을 찜해두고 찜 목록 페이지에서 모아 보는 상점입니다. 찜 정보는 사용자별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

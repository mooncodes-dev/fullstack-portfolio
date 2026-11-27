import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "책과 굿즈 상점",
  description: "책과 굿즈를 파는 상점으로, 책 제목으로 상품을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

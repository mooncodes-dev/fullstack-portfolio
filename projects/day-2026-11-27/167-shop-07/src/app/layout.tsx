import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스티커 문구 상점",
  description: "스티커와 문구류를 파는 상점으로, 상품 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

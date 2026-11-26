import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "중고 자전거 거래 포럼",
  description: "중고 자전거 거래 후기를 공유하고, 자전거 모델로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

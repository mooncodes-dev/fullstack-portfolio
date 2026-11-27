import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "꽃 배달 상점",
  description: "꽃다발을 주문하는 상점으로, 꽃 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

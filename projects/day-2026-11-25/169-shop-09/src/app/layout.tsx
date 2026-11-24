import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "핸드메이드 액세서리 상점",
  description: "직접 만든 액세서리를 판매하고, 상품 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

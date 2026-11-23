import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캠핑 용품 상점",
  description: "캠핑에 필요한 용품을 모아 보여주는 상점이다. 마음에 드는 용품에 좋아요를 눌러 찜해 둘 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

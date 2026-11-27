import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인테리어 소품 상점",
  description: "인테리어 소품을 파는 상점으로, 소품 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

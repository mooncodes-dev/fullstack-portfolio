import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "플로리스트 작품 포트폴리오",
  description: "만든 꽃다발과 플라워 작품을 소개하고, 작품 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

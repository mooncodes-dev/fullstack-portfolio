import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "가사 메모 플랫폼",
  description: "좋아하는 가사 구절을 곡 정보와 함께 저장하고 공개하는 플랫폼입니다. 가사 메모는 DB에 저장되고 곡별로 검색할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

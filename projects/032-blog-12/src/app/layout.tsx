import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "북마크 블로그",
  description: "마음에 드는 글을 북마크해두고 \"내 북마크\" 페이지에서 모아 볼 수 있게 하세요. 북마크는 사용자별로 DB에 저장되고, 북마크 취소도 가능합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

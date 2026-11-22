import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "레시피 좋아요와 스크랩 사이트",
  description: "마음에 드는 레시피를 스크랩해 \"내 스크랩\" 페이지에서 모아 보세요. 스크랩은 사용자별로 DB에 저장되고 중복 스크랩을 막습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

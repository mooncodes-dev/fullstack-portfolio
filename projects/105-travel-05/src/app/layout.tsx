import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행지 추천 사이트",
  description: "가본 여행지를 별점과 함께 추천 글로 올리고, 다른 사람이 좋아요를 누를 수 있는 사이트입니다. 추천 글과 좋아요는 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

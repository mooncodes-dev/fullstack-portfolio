import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "추천/비추천 포럼",
  description: "글에 추천과 비추천을 누를 수 있고 추천이 많은 글이 상단에 뜨는 포럼입니다. 투표 기록은 사용자별로 DB에 저장해 중복 투표를 막습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

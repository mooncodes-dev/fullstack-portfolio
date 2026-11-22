import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 후기 댓글 페이지",
  description: "운동마다 해본 사람들의 후기와 난이도 평가를 남기는 페이지입니다. 후기는 DB에 저장되고 평균 난이도가 표시됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

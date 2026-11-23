import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "저당 디저트 레시피 사이트",
  description: "설탕을 줄인 디저트 레시피를 소개하고, 방문자가 레시피에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

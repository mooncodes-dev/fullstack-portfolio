import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "김밥과 주먹밥 레시피 사이트",
  description: "소풍 도시락용 김밥과 주먹밥 레시피를 소개하고, 방문자가 레시피에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

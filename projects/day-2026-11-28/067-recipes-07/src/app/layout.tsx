import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "어린이 도시락 간식 레시피 사이트",
  description: "어린이 도시락에 넣기 좋은 간식 레시피를 모으고, 방문자가 레시피에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "명절 음식 레시피 사이트",
  description: "명절마다 먹는 음식을 정리하고, 방문자가 레시피에 댓글로 변형 방법을 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

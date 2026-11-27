import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "직장인 고민 포럼",
  description: "직장인의 고민을 나누는 포럼으로, 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

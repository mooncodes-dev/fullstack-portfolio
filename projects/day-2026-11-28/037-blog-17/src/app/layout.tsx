import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계절별 캠핑 요리 블로그",
  description: "계절마다 캠핑에서 해먹은 요리를 기록하고, 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

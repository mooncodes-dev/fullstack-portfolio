import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "샐러드 레시피 사이트",
  description: "제철 채소 샐러드와 드레싱을 소개하고, 방문자가 댓글로 조합을 추천할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

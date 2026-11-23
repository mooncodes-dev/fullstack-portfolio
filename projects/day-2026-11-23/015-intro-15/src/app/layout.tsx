import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "커피 취향과 카페 기록 소개 페이지",
  description: "좋아하는 커피와 다녀온 카페를 기록하고, 방문자가 카페 후기에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

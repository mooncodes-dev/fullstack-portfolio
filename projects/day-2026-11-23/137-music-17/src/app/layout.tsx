import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 지식 백과 플랫폼",
  description: "음악 용어와 역사를 정리한 백과 플랫폼이다. 용어를 검색하고 유용한 항목에 좋아요를 눌러 인기 항목을 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

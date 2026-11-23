import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계란 요리 레시피 사이트",
  description: "계란으로 만드는 반찬과 메인 요리를 정리하고, 방문자가 레시피에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

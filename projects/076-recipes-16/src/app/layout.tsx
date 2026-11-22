import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "레시피 대결 투표 사이트",
  description: "두 레시피를 놓고 어느 쪽이 더 끌리는지 투표하는 사이트입니다. 투표 결과는 DB에 누적되고, 승률 순위를 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

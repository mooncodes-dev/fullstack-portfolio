import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "만보기 기록 대결 페이지",
  description: "하루 걸음 수를 입력하고 친구들과 순위를 겨루는 페이지입니다. 기록은 DB에 저장되고 주간 랭킹을 계산해 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

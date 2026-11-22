import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스킬 레벨 투표 페이지",
  description: "내 기술 스택(HTML, Python 등)을 막대 그래프로 보여주고, 방문자가 \"이 기술 잘해요\"에 투표할 수 있게 하세요. 투표 결과는 DB에 누적되어 실시간으로 그래프에 반영됩",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

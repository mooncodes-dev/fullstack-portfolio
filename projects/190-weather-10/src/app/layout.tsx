import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 퀴즈 사이트",
  description: "내일 날씨를 맞히는 퀴즈를 내고 다음 날 실제 날씨와 비교해 점수를 주는 사이트입니다. 예상과 결과는 DB에 저장하고 랭킹을 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

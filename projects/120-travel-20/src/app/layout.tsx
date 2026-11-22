import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다음 여행 투표 사이트",
  description: "후보 여행지를 올려두고 친구들이 투표로 다음 여행지를 정하는 사이트입니다. 투표 결과는 DB에 누적되고 마감일을 지나면 투표가 닫힙니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

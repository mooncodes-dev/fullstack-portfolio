import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "서울 골목 여행 일지",
  description: "서울의 골목길을 걸으며 만난 장소를 기록하고, 방문자가 일지에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

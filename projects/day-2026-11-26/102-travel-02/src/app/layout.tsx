import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "전주 한옥 여행 기록",
  description: "전주 한옥의 골목과 전통을 기록하고, 방문자가 일지에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "현지 교통수단 기록 일지 사이트",
  description: "버스, 기차, 비행기 등 현지 교통수단 이용 기록을 남기는 사이트이다. 교통수단별 후기에 댓글을 달아 정보를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

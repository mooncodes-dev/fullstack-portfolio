import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 소감 한 줄 일지 사이트",
  description: "짧은 소감을 한 줄씩 기록하는 가벼운 여행 일지 사이트이다. 다른 여행자의 일지에 댓글을 남기며 소감을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

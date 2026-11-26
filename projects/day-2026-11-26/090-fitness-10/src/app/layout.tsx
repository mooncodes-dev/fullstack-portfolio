import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "전신 스트레칭 기록",
  description: "전신 스트레칭 동작과 효과를 기록하고, 방문자가 기록에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

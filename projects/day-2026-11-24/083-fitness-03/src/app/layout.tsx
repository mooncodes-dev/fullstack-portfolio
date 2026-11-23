import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스트레칭 루틴 페이지",
  description: "부위별 스트레칭 동작을 단계별로 정리하고, 방문자가 동작에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

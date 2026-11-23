import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "임산부 운동 페이지",
  description: "임신 주수별 안전한 운동을 소개하고, 방문자가 댓글로 경험을 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "임산부 필라테스 루틴 페이지",
  description: "임산부를 위한 필라테스 루틴과 기구 운동을 기록하고, 방문자가 루틴에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

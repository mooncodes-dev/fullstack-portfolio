import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "신청곡 플랫폼",
  description: "방문자가 듣고 싶은 곡을 신청하면 목록에 쌓이고, 관리자가 재생 완료로 표시하는 플랫폼입니다. 신청 곡은 DB에 저장되고 대기 순서를 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

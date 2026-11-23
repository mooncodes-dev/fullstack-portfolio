import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "퇴근 후 취미 블로그",
  description: "퇴근 후 즐기는 취미 활동을 기록하고, 방문자가 취미 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

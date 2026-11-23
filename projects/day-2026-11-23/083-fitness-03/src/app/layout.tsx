import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "필라테스 루틴 페이지",
  description: "필라테스 루틴을 단계별로 정리하고, 방문자가 루틴에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다분야 크리에이터 포트폴리오 플랫폼",
  description: "여러 분야의 크리에이터가 포트폴리오를 올리고, 관리자가 크리에이터를 승인하고 부적절한 게시물을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

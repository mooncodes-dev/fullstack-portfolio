import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내 손글씨와 캘리그라피 소개 페이지",
  description: "직접 쓴 손글씨와 캘리그라피 작품을 소개하고, 로그인한 사용자만 작품을 올리고 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

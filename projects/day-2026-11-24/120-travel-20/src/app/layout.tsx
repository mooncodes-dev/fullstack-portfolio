import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "세계 일주 여행 일지 플랫폼",
  description: "세계 일주 여행자의 일지를 대륙별로 모아 보여주는 플랫폼이다. 회원가입과 로그인을 하면 내 일지를 올릴 수 있고, 관리자가 일지를 검수하며, 여행지를 검색해 일지를 찾을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

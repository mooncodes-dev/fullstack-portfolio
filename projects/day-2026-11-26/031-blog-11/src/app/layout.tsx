import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "동네 카페 탐방 블로그",
  description: "동네 카페의 메뉴와 분위기를 기록하고, 회원가입과 로그인으로 카페 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

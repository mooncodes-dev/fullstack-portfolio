import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "소도시 카페 탐방 블로그 플랫폼",
  description: "여러 소도시의 카페를 여러 필자가 함께 기록하고, 관리자가 글을 승인하고 지역을 관리할 수 있다. 회원가입과 로그인으로 필자를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

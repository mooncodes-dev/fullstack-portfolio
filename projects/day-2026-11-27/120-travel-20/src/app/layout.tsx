import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 일지 공유 종합 플랫폼",
  description: "여러 여행자의 일지를 함께 공유하고, 관리자가 일지를 검수하고 여행자를 관리할 수 있다. 회원가입과 로그인으로 여행자를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 취향 종합 공유 플랫폼",
  description: "여러 사용자의 음악 취향을 함께 모으고, 관리자가 곡을 검수하고 회원을 관리할 수 있다. 회원가입과 로그인으로 회원을 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

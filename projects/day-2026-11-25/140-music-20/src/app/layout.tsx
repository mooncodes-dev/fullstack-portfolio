import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 공유 플랫폼",
  description: "여러 장르의 음악을 여러 사용자가 함께 추천하고, 관리자가 곡을 검수하고 장르를 관리할 수 있다. 회원가입과 로그인으로 사용자를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

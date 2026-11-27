import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "레시피 공유 커뮤니티 플랫폼",
  description: "여러 사용자가 레시피를 함께 올리고, 관리자가 레시피를 검수하고 회원을 관리할 수 있다. 회원가입과 로그인으로 사용자를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

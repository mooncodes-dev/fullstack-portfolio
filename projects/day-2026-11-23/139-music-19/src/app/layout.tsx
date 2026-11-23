import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 커뮤니티 관리자 플랫폼",
  description: "관리자가 음악 커뮤니티의 글을 검수하는 플랫폼이다. 회원가입과 로그인을 한 뒤 글을 등록하면 관리자가 내용을 확인하고 공개 여부를 결정한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

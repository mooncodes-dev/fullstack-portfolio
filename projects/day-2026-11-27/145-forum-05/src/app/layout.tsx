import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주식 투자 포럼",
  description: "주식 투자 정보를 나누는 포럼으로, 회원가입과 로그인으로 나만의 투자 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

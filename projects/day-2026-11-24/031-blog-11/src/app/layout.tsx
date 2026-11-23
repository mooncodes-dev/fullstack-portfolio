import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "동네 산책 코스 블로그",
  description: "동네의 산책 코스를 사진과 함께 소개하고, 코스별로 글을 모아볼 수 있다. 회원가입과 로그인으로 코스를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

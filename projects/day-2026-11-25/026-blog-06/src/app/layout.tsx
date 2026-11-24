import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "작은 정원 가꾸기 블로그",
  description: "베란다 정원을 가꾸는 과정을 기록하고, 회원가입과 로그인으로 나만의 정원 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 키우는 물고기 일지 소개 페이지",
  description: "키우는 물고기의 종류와 수조 관리 기록을 소개하고, 회원가입과 로그인으로 나만의 일지를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "서비스 기획자 포트폴리오",
  description: "기획한 서비스와 유저 플로우를 사례별로 보여주고, 회원가입과 로그인으로 나만의 사례를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

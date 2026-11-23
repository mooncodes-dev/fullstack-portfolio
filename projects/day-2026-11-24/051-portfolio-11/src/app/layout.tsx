import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "UX 리서처 포트폴리오",
  description: "진행한 사용자 조사와 인사이트를 정리하고, 회원가입과 로그인으로 나만의 포트폴리오를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

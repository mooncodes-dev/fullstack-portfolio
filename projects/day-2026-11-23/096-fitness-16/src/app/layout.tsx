import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "크로스핏 WOD 기록 페이지",
  description: "매일의 WOD와 기록을 정리하고, 회원가입과 로그인으로 나만의 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

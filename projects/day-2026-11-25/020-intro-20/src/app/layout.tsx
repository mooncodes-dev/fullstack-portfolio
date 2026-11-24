import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나만의 라이프스타일 종합 소개 페이지",
  description: "소개, 취미, 기록을 한 화면에 모으고, 관리자가 방명록과 문의를 한곳에서 관리할 수 있다. 회원가입과 로그인으로 프로필을 관리한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

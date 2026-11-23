import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "외국어 공부 일지 소개 페이지",
  description: "매일 공부한 단어와 문장을 기록하고, 날짜별로 학습량을 확인할 수 있다. 회원가입과 로그인을 하면 나만의 일지를 따로 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

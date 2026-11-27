import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "마케팅 데이터 분석가 포트폴리오",
  description: "마케팅 데이터를 분석한 시각화 사례를 보여주고, 회원가입과 로그인으로 나만의 분석 사례를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

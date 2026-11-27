import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "보컬 트레이너 포트폴리오",
  description: "지도한 수강생의 성장 사례와 레슨 커리큘럼을 소개하고, 회원가입과 로그인으로 나만의 사례를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

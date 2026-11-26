import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "한국 기차 여행 일지 공유 플랫폼",
  description: "한국의 기차 여행 일지를 여러 여행자가 함께 쓰고, 관리자가 일지를 검수하고 노선을 관리할 수 있다. 회원가입과 로그인으로 여행자를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

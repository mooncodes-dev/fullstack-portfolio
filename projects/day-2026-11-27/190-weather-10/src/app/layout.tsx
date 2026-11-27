import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "출근길 날씨 정보 페이지",
  description: "출근길 날씨와 옷차림 팁을 제공하고, 회원가입과 로그인으로 나만의 관심 지역을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

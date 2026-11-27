import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "강원도 겨울 여행 페이지",
  description: "강원도의 겨울 여행 코스를 기록하고, 회원가입과 로그인으로 나만의 여행 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

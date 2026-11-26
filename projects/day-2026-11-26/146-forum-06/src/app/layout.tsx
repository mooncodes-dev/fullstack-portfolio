import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "동네 운동 모임 포럼",
  description: "동네 운동 모임의 일정과 후기를 공유하고, 회원가입과 로그인으로 모임 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

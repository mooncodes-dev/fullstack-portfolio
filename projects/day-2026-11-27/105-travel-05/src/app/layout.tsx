import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "바다 여행 일지",
  description: "바닷가 여행 기록을 공유하고, 회원가입과 로그인으로 나만의 바다 여행 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

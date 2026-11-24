import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "작곡 데모 공유 모음",
  description: "만든 곡의 데모를 공유하고, 회원가입과 로그인으로 나만의 작곡 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

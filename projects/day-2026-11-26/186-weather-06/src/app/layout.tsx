import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "태풍 대비 알림",
  description: "태풍 대비 방법을 기록하고, 회원가입과 로그인으로 나만의 알림 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

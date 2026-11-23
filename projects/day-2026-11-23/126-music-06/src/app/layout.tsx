import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "신곡 소식 알림 플랫폼",
  description: "회원가입과 로그인을 하면 좋아하는 가수의 신곡 소식을 받아볼 수 있는 플랫폼이다. 신곡 소식에 좋아요를 눌러 기대감을 표시할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

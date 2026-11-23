import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기상청 알림 모음 사이트",
  description: "기상청의 특보와 알림을 모아 보여주는 사이트이다. 회원가입과 로그인을 하면 관심 지역의 알림을 구독할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "비 오는 날 음악 플랫폼",
  description: "비 오는 날 어울리는 노래를 모아 공유하는 플랫폼이다. 회원가입과 로그인을 하면 나만의 비 오는 날 플레이리스트를 만들 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 취향 친구 찾기 플랫폼",
  description: "회원가입과 로그인을 하면 음악 취향이 비슷한 친구를 찾을 수 있는 플랫폼이다. 가수나 장르를 검색해 취향이 맞는 사람을 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

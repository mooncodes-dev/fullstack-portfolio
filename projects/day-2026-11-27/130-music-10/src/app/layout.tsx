import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "밤에 듣는 음악 추천",
  description: "밤에 듣기 좋은 잔잔한 곡을 추천하고, 회원가입과 로그인으로 나만의 밤 플레이리스트를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

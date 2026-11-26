import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영화 속 장소 탐방 블로그",
  description: "영화에 나온 장소를 직접 찾아 기록하고, 회원가입과 로그인으로 나만의 탐방 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "작사 노트 공유 플랫폼",
  description: "쓴 가사와 작사 노트를 공유하는 플랫폼이다. 회원가입과 로그인을 하면 나만의 작사 노트를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

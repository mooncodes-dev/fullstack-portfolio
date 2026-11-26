import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "제철 과일 샐러드 레시피 공유",
  description: "제철 과일로 만드는 샐러드를 공유하고, 회원가입과 로그인으로 나만의 샐러드 레시피를 관리할 수 있다. 방문자가 레시피에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "지역 맛집 추천 포럼",
  description: "지역 맛집을 추천하고 후기를 나누며, 회원가입과 로그인으로 추천 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

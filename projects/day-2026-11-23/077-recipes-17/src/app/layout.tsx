import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스무디 레시피 사이트",
  description: "과일과 채소 스무디 레시피를 소개하고, 회원가입과 로그인으로 즐겨찾는 레시피를 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

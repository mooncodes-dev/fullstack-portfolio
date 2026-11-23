import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "혼밥 레시피 사이트",
  description: "혼자 먹기 좋은 한 그릇 요리를 소개하고, 레시피를 추가·수정·삭제할 수 있다. 회원가입과 로그인으로 나만의 레시피를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

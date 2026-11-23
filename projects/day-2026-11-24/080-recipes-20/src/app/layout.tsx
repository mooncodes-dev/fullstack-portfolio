import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "세계 가정식 레시피 플랫폼",
  description: "여러 나라의 가정식 레시피를 모으고, 관리자가 추천 레시피를 선정하고 부적절한 게시물을 관리할 수 있다. 회원가입과 로그인으로 요리사를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

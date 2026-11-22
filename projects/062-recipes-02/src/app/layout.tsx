import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "회원제 레시피 사이트",
  description: "회원가입·로그인한 사용자만 레시피를 올릴 수 있게 하세요. 내 레시피 목록 페이지에서 본인이 쓴 글만 관리합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "직장인 반찬 레시피 공유",
  description: "바쁜 직장인을 위한 반찬을 소개하고, 회원가입과 로그인으로 나만의 반찬 레시피를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

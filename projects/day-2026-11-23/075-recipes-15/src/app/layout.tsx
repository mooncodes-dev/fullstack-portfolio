import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "면 요리 레시피 사이트",
  description: "국수·파스타·라면 변형 레시피를 소개하고, 면 종류별로 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

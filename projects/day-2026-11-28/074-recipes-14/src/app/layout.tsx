import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "전자레인지 초간단 레시피 사이트",
  description: "전자레인지로 10분 안에 만드는 요리를 소개하고, 요리 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

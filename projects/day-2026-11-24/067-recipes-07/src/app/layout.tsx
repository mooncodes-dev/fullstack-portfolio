import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "김치 활용 레시피 사이트",
  description: "김치로 만드는 다양한 요리를 소개하고, 요리 이름으로 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

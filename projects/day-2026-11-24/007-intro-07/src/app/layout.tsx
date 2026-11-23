import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 만든 요리 도시락 소개 페이지",
  description: "직접 만든 도시락 메뉴와 레시피를 소개하고, 메뉴 이름으로 도시락을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

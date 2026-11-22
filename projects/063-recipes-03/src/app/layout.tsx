import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "재료로 검색하는 레시피 사이트",
  description: "냉장고에 있는 재료를 입력하면 그 재료가 들어가는 레시피를 찾아주는 검색 기능을 구현하세요. 재료는 레시피와 연결해 DB에 저장합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

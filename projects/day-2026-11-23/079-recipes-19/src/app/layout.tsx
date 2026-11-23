import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "남은 재료 활용 레시피 사이트",
  description: "냉장고에 남은 재료로 만들 수 있는 요리를 검색하고, 재료를 입력하면 어울리는 레시피를 찾을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

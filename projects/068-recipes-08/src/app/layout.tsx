import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인분 계산 레시피 사이트",
  description: "레시피 재료 양을 DB에 숫자로 저장해두고, 인분을 바꾸면 재료 양이 자동으로 계산되어 표시되는 기능을 만드세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

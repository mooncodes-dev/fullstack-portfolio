import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "홈카페 음료 레시피 사이트",
  description: "집에서 만드는 커피와 차 레시피를 소개하고, 방문자가 음료에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

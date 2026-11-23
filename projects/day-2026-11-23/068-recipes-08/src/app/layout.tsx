import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "베이킹 레시피 사이트",
  description: "빵과 과자 레시피를 단계별로 정리하고, 방문자가 레시피에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계절별 레시피 큐레이션 플랫폼",
  description: "계절 재료를 활용한 레시피를 모으고, 관리자가 추천 레시피를 선정하고 부적절한 게시물을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

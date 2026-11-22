import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주간 예보 사이트",
  description: "도시별 일주일 예보를 API로 받아와 카드 형태로 보여주는 사이트입니다. 자주 보는 도시는 로그인 사용자가 즐겨찾기로 저장할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

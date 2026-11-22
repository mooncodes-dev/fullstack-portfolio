import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "알레르기 필터 레시피 사이트",
  description: "레시피 재료에 알레르기 유발 재료를 표시해두고, 내 알레르기 정보를 저장하면 해당 재료가 들어간 레시피를 제외하고 보여주는 기능을 구현하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

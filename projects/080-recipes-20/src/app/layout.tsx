import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "레시피 구독 박스 흉내 사이트",
  description: "좋아하는 스타일을 고르면 매주 레시피 세트를 추천해주는 구독 서비스를 흉내 내보세요. 구독 신청과 해지는 DB에 저장하고, 관리자 페이지에서 구독자 목록을 관리합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

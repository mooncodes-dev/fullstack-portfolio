import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내 링크 모음 페이지 (링크트리 클론)",
  description: "SNS, 블로그, 유튜브 링크를 한곳에 모은 페이지에 관리자 로그인을 붙여보세요. 로그인한 본인만 링크를 추가·수정·삭제(CRUD)할 수 있고, 링크별 클릭 수도 DB에 기록합니다",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

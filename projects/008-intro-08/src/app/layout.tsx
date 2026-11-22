import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "타임라인으로 보는 내 이력 페이지",
  description: "학교, 자격증, 프로젝트 경험을 연도순 타임라인으로 보여주는 페이지입니다. 이력 항목은 DB에서 불러오고, 관리자 페이지에서 항목을 추가·수정·삭제할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

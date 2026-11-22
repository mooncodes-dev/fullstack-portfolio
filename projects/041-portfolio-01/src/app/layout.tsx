import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "프로젝트 CRUD 포트폴리오",
  description: "내가 만든 프로젝트를 등록하고 보여주는 포트폴리오입니다. 프로젝트 제목, 설명, 사용 기술, 링크를 DB에 저장하고 관리자 로그인 후에만 추가·수정·삭제할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

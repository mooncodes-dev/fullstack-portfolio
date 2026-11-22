import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "동영상 데모 포트폴리오",
  description: "프로젝트 소개 영상 파일을 업로드하거나 영상 링크를 등록해 상세 페이지에서 재생되게 하세요. 영상 정보는 DB에 저장하고 조회수를 셉니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

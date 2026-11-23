import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "봉사활동 기록 소개 페이지",
  description: "참여한 봉사활동의 장소와 후기를 정리하고, 활동 사진을 파일로 업로드할 수 있다. 봉사 기록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

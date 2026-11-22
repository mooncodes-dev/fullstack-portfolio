import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "사진 갤러리가 있는 소개 페이지",
  description: "내 일상 사진을 올리는 갤러리를 만드세요. 관리자 로그인 후 이미지 파일을 업로드하면 서버에 저장되고, 사진마다 제목과 설명을 DB에 함께 기록해 목록으로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

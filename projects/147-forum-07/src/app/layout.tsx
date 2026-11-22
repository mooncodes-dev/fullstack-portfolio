import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "이미지 게시판 포럼",
  description: "사진과 함께 글을 올리는 갤러리형 게시판입니다. 이미지는 서버에 저장하고 목록에서는 썸네일 그리드로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

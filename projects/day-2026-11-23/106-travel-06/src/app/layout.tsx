import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 사진 파일 일지 사이트",
  description: "여행 사진을 파일 업로드로 첨부해 일지를 꾸미는 사이트이다. 사진과 함께 글을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

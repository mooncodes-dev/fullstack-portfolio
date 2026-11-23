import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아이와 함께하는 여행 일지 사이트",
  description: "아이와 함께 다녀온 가족 여행을 기록하는 사이트이다. 여행 사진을 파일 업로드로 첨부하고 일지에 댓글을 달아 추억을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "저녁 산책 일기 블로그",
  description: "저녁에 산책하며 느낀 점을 기록하고, 산책 사진을 파일로 업로드할 수 있다. 글은 작성·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

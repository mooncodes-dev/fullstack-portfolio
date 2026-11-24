import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "손글씨 다이어리 블로그",
  description: "손글씨로 쓴 일상을 사진과 함께 기록하고, 사진을 파일로 업로드할 수 있다. 글은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

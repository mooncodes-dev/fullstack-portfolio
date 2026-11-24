import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자취 생활 꿀팁 포럼",
  description: "자취 생활 꿀팁을 나누는 게시판이다. 꿀팁 사진을 파일로 업로드할 수 있다. 글은 작성·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

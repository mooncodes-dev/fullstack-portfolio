import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "사진 취미 포럼",
  description: "사진 취미를 나누는 포럼으로, 사진을 파일로 업로드할 수 있다. 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

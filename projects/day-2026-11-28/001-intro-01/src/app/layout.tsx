import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 하루 마무리 루틴 소개 페이지",
  description: "하루를 마무리하는 루틴을 소개하고, 루틴을 추가·수정·삭제할 수 있다. 방문자가 루틴에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

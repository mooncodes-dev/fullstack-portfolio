import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다중 작성자 매거진 블로그",
  description: "여러 작성자가 하나의 매거진에 글을 쓰는 형태로 확장하세요. 작성자별 글 목록 페이지, 편집자 권한으로 다른 사람 글을 발행 승인하는 흐름까지 구현합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

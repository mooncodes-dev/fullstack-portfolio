import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "빈티지 의류 상점",
  description: "오래된 감성의 빈티지 의류를 모아 파는 상점이다. 의상 사진을 파일 업로드로 등록하고 문의 글에 댓글을 달 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

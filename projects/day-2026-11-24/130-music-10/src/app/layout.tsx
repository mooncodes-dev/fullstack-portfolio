import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "K팝 커버 댄스 플랫폼",
  description: "K팝 커버 댄스 영상을 파일 업로드로 올려 공유하는 플랫폼이다. 영상에 댓글을 달아 감상을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

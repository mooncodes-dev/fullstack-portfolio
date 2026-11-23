import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "커버곡 공유 플랫폼",
  description: "직접 부른 커버곡 음원을 파일 업로드로 올려 공유하는 플랫폼이다. 커버곡에 댓글을 달아 감상을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

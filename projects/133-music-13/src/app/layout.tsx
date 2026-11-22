import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "밴드 멤버 모집 플랫폼",
  description: "구하는 포지션과 지역을 적어 밴드 멤버를 모집하는 글을 올리는 플랫폼입니다. 모집 글은 DB에 저장되고 댓글로 지원할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

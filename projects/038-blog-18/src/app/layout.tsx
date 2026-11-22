import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "RSS와 공유 블로그",
  description: "글 목록을 RSS 피드 형태로도 제공하는 블로그를 만드세요. 글 링크를 복사하거나 SNS 공유 버튼을 누른 횟수를 DB에 기록하는 기능도 붙여봅니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

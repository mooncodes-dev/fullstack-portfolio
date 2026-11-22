import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "구독과 피드 블로그",
  description: "다른 사용자를 구독하면 그 사람의 새 글이 내 피드에 모여 보이는 블로그를 만드세요. 구독 관계는 DB에 저장하고, 피드는 최신순으로 불러옵니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 코스 공유 사이트",
  description: "하루 동선을 순서대로 장소 목록으로 만들어 공유하는 사이트입니다. 코스 정보는 DB에 저장되고 다른 사람이 스크랩해서 내 코스로 가져올 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

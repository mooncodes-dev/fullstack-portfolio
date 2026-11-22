import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "플레이리스트 공유 플랫폼",
  description: "내가 만든 재생 목록을 공개하고 다른 사람이 볼 수 있게 하세요. 곡 목록과 순서는 DB에 저장되고 플레이리스트마다 좋아요를 받을 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

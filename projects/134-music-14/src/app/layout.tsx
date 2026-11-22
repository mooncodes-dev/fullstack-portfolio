import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "노래방 애창곡 플랫폼",
  description: "내 애창곡 목록을 곡 번호와 함께 저장하고 친구와 공유하는 플랫폼입니다. 목록은 사용자별로 DB에 저장되고 좋아요를 받을 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

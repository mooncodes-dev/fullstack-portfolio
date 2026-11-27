import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아이돌 노래방 애창곡 페이지",
  description: "노래방 애창곡과 선곡 팁을 기록하고, 방문자가 곡에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

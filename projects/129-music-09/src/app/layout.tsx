import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "콘서트 후기 플랫폼",
  description: "다녀온 공연 후기와 사진을 올리는 플랫폼입니다. 후기는 DB에 저장되고 공연장별·아티스트별로 모아 볼 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

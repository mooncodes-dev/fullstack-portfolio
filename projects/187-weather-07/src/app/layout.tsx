import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행지 날씨 모음 사이트",
  description: "가고 싶은 여행지들을 저장하면 각 도시의 날씨를 한 화면에 모아 보여주는 사이트입니다. 여행지 목록은 사용자별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

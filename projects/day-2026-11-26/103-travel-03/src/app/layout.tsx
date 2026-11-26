import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "순천만 여행 사진",
  description: "순천만의 갈대밭과 습지를 사진과 함께 기록하고, 장소 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

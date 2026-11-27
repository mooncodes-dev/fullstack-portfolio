import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "일출·일몰 정보 페이지",
  description: "지역별 일출·일몰 시간을 제공하고, 장소 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

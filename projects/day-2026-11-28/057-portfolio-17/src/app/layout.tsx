import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "무대 메이크업 아티스트 포트폴리오",
  description: "무대 메이크업 룩과 전후 비교를 보여주고, 룩 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

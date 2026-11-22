import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캠핑 날씨 사이트",
  description: "캠핑장 후보 지역들의 주말 날씨를 모아 비교하고 메모를 남기는 사이트입니다. 후보 지역과 메모는 사용자별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

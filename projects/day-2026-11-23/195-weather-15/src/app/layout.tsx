import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 기록 내보내기 사이트",
  description: "기록한 날씨를 표로 내려받아 정리하는 사이트이다. 날씨 기록을 검색하고 유용한 기록에 좋아요를 눌러 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

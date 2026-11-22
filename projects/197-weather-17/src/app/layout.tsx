import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 배경 테마 사이트",
  description: "현재 날씨 상태에 따라 페이지 배경과 아이콘이 바뀌는 사이트입니다. 날씨 상태별 테마 설정은 DB에 저장하고 관리자 페이지에서 바꿀 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

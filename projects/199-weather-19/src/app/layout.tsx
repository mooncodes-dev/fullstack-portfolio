import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 기반 일정 메모 사이트",
  description: "일정 메모를 날짜와 함께 저장하면 그 날짜의 예보를 API로 붙여 보여주는 사이트입니다. 일정은 사용자별로 DB에 저장되고 비 예보 일정에는 표시를 합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 알림 신청 사이트",
  description: "비 소식이 있으면 알려달라고 신청하는 사이트입니다. 신청 정보와 알림 조건을 DB에 저장하고, 날씨 데이터를 확인할 때 조건에 맞는 신청을 골라내는 것까지 구현하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

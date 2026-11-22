import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "우산 알림 사이트",
  description: "출근 시간대 강수 확률이 높으면 우산이 필요하다고 알려주는 개인 맞춤 사이트입니다. 사용자의 출근 시간과 도시를 DB에 저장해 판정에 사용하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 일지 구독 사이트",
  description: "마음에 드는 여행자를 구독하면 새 일지가 올라올 때 내 피드에 모여 보이는 사이트입니다. 구독 관계는 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

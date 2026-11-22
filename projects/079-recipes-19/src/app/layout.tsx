import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "정기 레시피 챌린지 사이트",
  description: "\"이번 주 주제: 두부 요리\"처럼 주제를 공지하고 사용자들이 레시피를 출품하는 챌린지를 운영하세요. 출품작은 기간이 지나면 마감 처리되고 투표로 우승작을 뽑습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

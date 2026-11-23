import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 키우는 식물 일지 소개 페이지",
  description: "키우는 식물의 성장 기록을 사진과 함께 올리고, 식물별로 물을 준 날짜를 기록할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

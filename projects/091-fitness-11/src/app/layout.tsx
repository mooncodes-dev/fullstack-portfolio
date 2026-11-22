import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스트레칭 알림 메모 페이지",
  description: "부위별 스트레칭 방법을 소개하고, 내가 자주 하는 스트레칭을 즐겨찾기에 저장하는 페이지입니다. 즐겨찾기는 사용자별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

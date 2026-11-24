import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "부산 바다 여행 기록",
  description: "부산의 바다와 명소를 기록하고, 장소 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

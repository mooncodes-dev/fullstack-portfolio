import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자전거 여행 일지",
  description: "자전거로 다녀온 여행 코스를 기록하고, 코스 이름으로 일지를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "체감온도 안내 사이트",
  description: "바람과 습도를 반영한 체감온도를 알려주는 사이트이다. 마음에 드는 지역을 좋아요로 저장해 체감온도를 모아 볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

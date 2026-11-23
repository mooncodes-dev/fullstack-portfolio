import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "안개 예보 사이트",
  description: "안개가 짙은 시간과 지역을 알려주는 사이트이다. 마음에 드는 지역을 좋아요로 저장해 안개 예보를 모아 볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

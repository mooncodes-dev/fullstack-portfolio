import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 뉴스 큐레이션 사이트",
  description: "날씨와 기후 관련 뉴스를 모아 정리하는 사이트이다. 뉴스를 검색하고 유용한 기사를 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

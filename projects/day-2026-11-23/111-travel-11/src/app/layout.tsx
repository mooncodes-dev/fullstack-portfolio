import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 메모 해시태그 정리 사이트",
  description: "해시태그로 여행 메모를 정리하는 사이트이다. 해시태그를 검색하면 같은 주제의 메모를 한 번에 모아 볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

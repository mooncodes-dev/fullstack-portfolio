import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 스트리밍 요금제 비교 플랫폼",
  description: "스트리밍 서비스의 요금제를 비교하는 플랫폼이다. 요금제를 검색하고 유용한 비교 글에 좋아요를 눌러 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

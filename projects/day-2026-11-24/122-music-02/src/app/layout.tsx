import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "공부할 때 듣는 음악 플랫폼",
  description: "공부에 집중할 때 듣는 음악을 추천하는 플랫폼이다. 곡 제목이나 가수를 검색해 공부용 음악을 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

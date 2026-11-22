import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "레시피 인쇄와 공유 사이트",
  description: "레시피를 인쇄용 화면으로 보여주고, 공유 링크를 만들면 로그인 없이도 볼 수 있게 하세요. 공유 횟수와 조회수를 DB에 기록합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

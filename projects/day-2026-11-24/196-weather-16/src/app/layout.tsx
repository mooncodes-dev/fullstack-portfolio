import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "태양광 발전 날씨 사이트",
  description: "태양광 발전량과 일조량 예보를 알려주는 사이트이다. 발전 기록을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

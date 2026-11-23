import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "축제 여행 일지 사이트",
  description: "다녀온 지역 축제의 분위기와 프로그램을 기록하는 사이트이다. 축제 후기에 댓글과 좋아요를 달아 정보를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

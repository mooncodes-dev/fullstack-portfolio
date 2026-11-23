import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기차 여행 일지 사이트",
  description: "기차를 타고 다녀온 여행을 기록하는 사이트이다. 여행지의 이름을 검색하면 관련 일지가 바로 나온다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날짜별 여행 일지 작성 사이트",
  description: "날짜를 골라 여행 기록을 등록하고 조회하고 수정하고 삭제할 수 있는 기본 여행 일지 사이트이다. 하루하루의 일정을 순서대로 정리해 볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

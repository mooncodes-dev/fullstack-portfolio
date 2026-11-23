import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "혼자 여행 일지 사이트",
  description: "혼자 떠난 여행의 하루하루를 기록하는 사이트이다. 일지는 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주간 운동 계획표 페이지",
  description: "요일별 운동 계획을 세우고 달성 여부를 체크하고, 계획을 추가·수정·삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

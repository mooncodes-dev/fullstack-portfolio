import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "체성분 목표 관리 페이지",
  description: "목표 체지방률 같은 목표를 설정하고 측정값을 주기적으로 기록하는 페이지입니다. 목표와 기록은 DB에 저장되고 달성률을 진행 바로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

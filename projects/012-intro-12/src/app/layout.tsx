import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내 목표 체크리스트 공유 페이지",
  description: "올해 목표 목록을 공개하고 달성 여부를 체크하는 페이지입니다. 로그인한 본인만 목표를 추가하고 완료 체크를 바꿀 수 있고, 달성률은 DB 값으로 계산해 진행 바로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

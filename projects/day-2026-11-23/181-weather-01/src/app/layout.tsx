import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "시간별 날씨 예보 사이트",
  description: "시간대별 기온과 날씨를 그래프로 보여주는 사이트이다. 시간별 예보를 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

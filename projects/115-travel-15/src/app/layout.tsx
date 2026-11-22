import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 경비 정산 사이트",
  description: "함께 여행한 사람들과 지출을 입력하면 1인당 얼마씩 내야 하는지 계산해주는 사이트입니다. 지출 내역은 여행 그룹별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

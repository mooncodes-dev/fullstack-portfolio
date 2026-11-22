import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 경비 기록 사이트",
  description: "교통, 숙소, 식비 같은 항목별 지출을 기록하면 총액과 항목별 합계를 계산해주는 사이트입니다. 지출은 여행별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

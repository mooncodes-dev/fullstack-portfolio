import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 비교 사이트",
  description: "두 도시를 골라 기온과 강수 확률을 나란히 비교하는 사이트입니다. 비교한 조합을 DB에 저장해 최근 비교 목록으로 다시 볼 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

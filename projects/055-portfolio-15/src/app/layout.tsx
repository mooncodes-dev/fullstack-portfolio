import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "공개/비공개 전환 포트폴리오",
  description: "아직 공개하고 싶지 않은 프로젝트를 비공개로 숨길 수 있는 포트폴리오입니다. 공개 여부는 DB에 저장하고, 비공개 프로젝트는 본인만 볼 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

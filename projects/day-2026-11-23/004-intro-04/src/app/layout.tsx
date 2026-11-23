import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자격증과 수료증 모음 소개 페이지",
  description: "취득한 자격증과 수료 내역을 연도별로 정리해 보여주고, 증명서 이미지를 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

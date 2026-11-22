import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "경력 타임라인 포트폴리오",
  description: "경력과 수상 이력을 연도별로 관리하는 포트폴리오입니다. 이력 항목을 DB에서 CRUD하고, 기간순 정렬과 재직 중 표시까지 구현하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

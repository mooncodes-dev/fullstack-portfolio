import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "PDF로 내보내는 포트폴리오",
  description: "DB에 저장된 프로젝트와 이력을 모아 한 장의 PDF 이력서 형태로 자동 생성해 내려받는 기능을 구현하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "개발 공부 로드맵 소개 페이지",
  description: "공부한 기술과 앞으로 배울 계획을 로드맵으로 정리하고, 항목을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

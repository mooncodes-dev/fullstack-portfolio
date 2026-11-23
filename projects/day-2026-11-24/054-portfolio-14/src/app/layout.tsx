import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "컨설턴트 포트폴리오",
  description: "진행한 컨설팅 사례와 성과를 정리하고, 사례를 업종별로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

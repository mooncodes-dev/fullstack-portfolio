import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "제품 디자이너 포트폴리오",
  description: "디자인한 제품을 사용 사례와 함께 보여주고, 제품 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

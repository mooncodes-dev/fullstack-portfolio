import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "옥상정원 디자이너 포트폴리오",
  description: "설계한 옥상정원과 테라스 정원을 사례와 함께 보여주고, 사례 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 위젯 공유 사이트",
  description: "도시를 고르면 공유 링크가 만들어지고, 링크를 열면 그 도시 날씨만 크게 보여주는 사이트입니다. 링크와 도시 정보는 DB에 저장하고 조회수를 셉니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

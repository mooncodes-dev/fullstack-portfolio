import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "에어프라이어 간식 레시피 사이트",
  description: "에어프라이어로 만드는 간식을 모으고, 간식 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

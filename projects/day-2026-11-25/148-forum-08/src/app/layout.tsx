import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자전거 정비 팁 포럼",
  description: "자전거 정비 팁과 질문을 나누고, 부품 이름으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

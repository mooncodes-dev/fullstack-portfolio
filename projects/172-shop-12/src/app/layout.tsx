import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "질문 게시판 상점",
  description: "상품마다 구매 전 질문을 남기고 판매자가 답변하는 Q&A 영역이 있는 상점입니다. 질문과 답변은 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

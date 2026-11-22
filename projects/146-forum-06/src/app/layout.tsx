import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "질문답변 포럼",
  description: "질문 글에 답변을 달고 질문자가 채택할 수 있는 포럼입니다. 채택된 답변은 표시가 붙고, 채택 여부는 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

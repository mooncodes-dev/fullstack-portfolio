import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Q&A 질문함 페이지",
  description: "방문자가 익명으로 질문을 남기면 DB에 저장되고, 본인이 로그인해서 답변을 달면 질문 아래에 답변이 함께 표시되는 페이지를 만들어보세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

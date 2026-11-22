import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 부위별 Q&A 페이지",
  description: "\"무릎이 아플 때 해도 되는 운동\" 같은 질문을 올리고 답변을 받는 게시판을 만드세요. 질문과 답변은 DB에 저장되고 카테고리별로 나눕니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "레시피 질문답변 사이트",
  description: "레시피마다 \"이 단계가 헷갈려요\" 같은 질문을 남기고 작성자가 답변하는 Q&A 기능을 만드세요. 질문과 답변은 DB에 저장되고 답변 완료 표시를 합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

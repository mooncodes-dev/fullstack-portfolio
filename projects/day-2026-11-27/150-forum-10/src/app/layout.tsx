import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "요리 질문 포럼",
  description: "요리 질문과 답변을 나누는 포럼으로, 회원가입과 로그인으로 나만의 질문 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

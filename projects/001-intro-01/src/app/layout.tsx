import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "방명록이 있는 자기소개 페이지",
  description: "이름, 취미, 목표를 소개하는 페이지에 방문자가 이름과 메시지를 남기는 방명록을 붙여보세요. 방명록 글은 DB에 저장되고, 최신순으로 불러와 목록으로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

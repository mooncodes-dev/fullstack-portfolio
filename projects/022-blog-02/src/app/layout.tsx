import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "회원제 블로그",
  description: "회원가입·로그인 기능을 붙여 로그인한 사람만 글을 쓸 수 있게 하세요. 글마다 작성자가 표시되고, 본인 글만 수정·삭제할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

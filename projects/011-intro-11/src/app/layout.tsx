import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "댓글이 달리는 자기소개 페이지",
  description: "소개 글 아래에 댓글 기능을 붙여보세요. 회원가입·로그인한 사용자만 댓글을 쓸 수 있고, 본인 댓글만 수정·삭제할 수 있으며, 댓글 수는 DB에서 집계해 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

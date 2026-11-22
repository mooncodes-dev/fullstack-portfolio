import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "댓글 피드백 포트폴리오",
  description: "프로젝트마다 댓글을 달아 피드백을 주고받을 수 있게 하세요. 회원가입한 방문자만 댓글을 쓰고, 본인 댓글만 삭제할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

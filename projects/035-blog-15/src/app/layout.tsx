import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "비밀번호 글 블로그",
  description: "특정 글에 비밀번호를 걸어, 비밀번호를 아는 사람만 읽을 수 있게 하세요. 비밀번호 검사는 서버에서 하고, 글 목록에는 자물쇠 표시만 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

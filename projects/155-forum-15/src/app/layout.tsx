import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "파일 자료실 포럼",
  description: "파일을 첨부해 공유하는 자료실형 게시판입니다. 파일은 서버에 저장하고 다운로드 횟수를 DB에 기록합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

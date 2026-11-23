import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 짐싸기 체크리스트 일지 사이트",
  description: "여행 짐싸기 체크리스트와 준비 과정을 기록하는 사이트이다. 체크리스트 파일을 파일 업로드로 공유하고 후기에 댓글을 달 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

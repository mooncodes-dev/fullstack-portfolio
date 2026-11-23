import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "반려동물과 함께하는 삶 소개 페이지",
  description: "반려동물의 일상과 사진, 건강 기록을 소개하고, 방문자가 댓글로 응원 메시지를 남길 수 있다. 사진은 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

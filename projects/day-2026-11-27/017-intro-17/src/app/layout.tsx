import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 정원 가꾸기 소개 페이지",
  description: "가꾸는 정원의 식물과 계절 변화를 소개하고, 방문자가 식물에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

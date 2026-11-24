import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "오늘의 미세먼지 알림",
  description: "오늘의 미세먼지 정보를 소개하고, 미세먼지 사진을 파일로 업로드할 수 있다. 기록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "코어 운동 기록 페이지",
  description: "코어 운동의 세트와 횟수를 기록하고, 기록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

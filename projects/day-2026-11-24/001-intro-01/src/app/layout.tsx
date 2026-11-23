import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 주말 나들이 기록 소개 페이지",
  description: "다녀온 주말 나들이 장소를 사진과 함께 소개하고, 방문자가 장소에 좋아요를 누를 수 있다. 나들이 기록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

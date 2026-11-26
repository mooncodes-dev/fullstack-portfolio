import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 사진 촬영 노하우 소개 페이지",
  description: "사진을 잘 찍는 노하우를 정리하고, 촬영 장소로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

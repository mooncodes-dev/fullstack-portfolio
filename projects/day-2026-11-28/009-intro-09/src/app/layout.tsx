import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 사진 취미 소개 페이지",
  description: "찍은 사진과 촬영 장소를 소개하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

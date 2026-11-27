import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 요리 레시피 노트 소개 페이지",
  description: "자주 만드는 요리와 레시피를 소개하고, 요리 이름으로 검색할 수 있다. 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

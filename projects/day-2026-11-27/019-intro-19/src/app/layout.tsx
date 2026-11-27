import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 수집품 엽서 소개 페이지",
  description: "모은 엽서를 소개하고, 엽서 사진을 파일로 업로드할 수 있다. 방문자가 엽서에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

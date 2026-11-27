import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 요리 도구 소개 페이지",
  description: "자주 쓰는 요리 도구와 활용법을 소개하고, 도구 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

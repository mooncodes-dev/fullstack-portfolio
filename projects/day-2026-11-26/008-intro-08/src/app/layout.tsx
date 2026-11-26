import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 요리 실수담 소개 페이지",
  description: "요리하다 생긴 실수담과 해결법을 소개하고, 요리 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

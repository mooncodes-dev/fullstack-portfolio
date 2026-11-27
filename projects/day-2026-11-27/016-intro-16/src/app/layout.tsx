import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 등산 코스 소개 페이지",
  description: "자주 오르는 등산 코스를 소개하고, 코스 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

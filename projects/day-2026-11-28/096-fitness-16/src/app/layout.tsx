import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "볼더링 기록 페이지",
  description: "오른 볼더링 코스와 난이도를 기록하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

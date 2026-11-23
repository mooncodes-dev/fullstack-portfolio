import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수공예 만들기 블로그",
  description: "직접 만든 수공예품의 제작 과정을 사진과 함께 기록하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

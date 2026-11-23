import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "댄스 연습 기록 페이지",
  description: "연습한 안무와 영상을 기록하고, 영상을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

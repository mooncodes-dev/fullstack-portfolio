import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캠핑장 바비큐 레시피",
  description: "캠핑장에서 구워 먹는 바비큐를 소개하고, 요리 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

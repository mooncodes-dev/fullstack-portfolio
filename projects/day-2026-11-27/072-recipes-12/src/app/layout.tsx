import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "유아 간식 레시피 공유",
  description: "유아를 위한 간식 레시피를 공유하고, 간식 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

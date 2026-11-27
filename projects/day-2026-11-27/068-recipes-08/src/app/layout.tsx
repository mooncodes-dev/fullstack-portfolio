import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "빵 굽기 레시피 공유",
  description: "빵 굽기 레시피를 공유하고, 사진을 파일로 업로드할 수 있다. 방문자가 레시피에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

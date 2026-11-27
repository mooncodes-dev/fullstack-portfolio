import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "저녁 반찬 레시피 공유",
  description: "저녁 반찬 레시피를 공유하고, 반찬 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "디저트 레시피 공유",
  description: "디저트 레시피를 사진과 함께 공유하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

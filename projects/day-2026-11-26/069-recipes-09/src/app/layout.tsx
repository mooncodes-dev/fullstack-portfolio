import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 파티 요리 레시피 공유",
  description: "주말 파티에 내기 좋은 요리를 소개하고, 파티 음식 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

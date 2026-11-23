import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "디저트 레시피 사이트",
  description: "케이크와 쿠키 레시피를 소개하고, 완성 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

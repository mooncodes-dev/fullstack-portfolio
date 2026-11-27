import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "저염식 건강 레시피 사이트",
  description: "짜지 않게 만드는 건강 레시피를 모으고, 레시피 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

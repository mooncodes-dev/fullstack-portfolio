import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "김치찌개 변형 레시피",
  description: "김치찌개를 색다르게 만드는 법을 소개하고, 요리 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

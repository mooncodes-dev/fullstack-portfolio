import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "에어프라이어 간식 레시피",
  description: "에어프라이어로 만드는 간식을 소개하고, 요리 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

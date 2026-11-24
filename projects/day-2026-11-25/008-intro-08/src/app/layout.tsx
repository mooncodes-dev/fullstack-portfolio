import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 만든 DIY 가구 소개 페이지",
  description: "직접 만든 가구를 소개하고, 제작 과정을 사진 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

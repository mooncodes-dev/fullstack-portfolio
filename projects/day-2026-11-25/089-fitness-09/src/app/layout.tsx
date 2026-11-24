import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "필라테스 동작 모음",
  description: "필라테스 동작을 소개하고, 동작 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

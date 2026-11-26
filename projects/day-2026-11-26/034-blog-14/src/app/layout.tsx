import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자전거 출근 기록 블로그",
  description: "자전거로 출근한 기록을 정리하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

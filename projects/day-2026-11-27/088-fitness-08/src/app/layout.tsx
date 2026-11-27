import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "등산 운동 기록 페이지",
  description: "등산한 산과 소요 시간을 기록하고, 산 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "등산 체력 관리 페이지",
  description: "등산 전 체력 훈련과 산행 기록을 정리하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

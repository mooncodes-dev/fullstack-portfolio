import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수집한 티켓과 스티커 소개 페이지",
  description: "모은 공연 티켓과 스티커를 소개하고, 티켓 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

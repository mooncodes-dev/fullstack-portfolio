import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 밴드 활동 소개 페이지",
  description: "밴드 활동과 공연 일정을 소개하고, 공연 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

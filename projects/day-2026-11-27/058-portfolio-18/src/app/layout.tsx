import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "교사 포트폴리오",
  description: "수업 자료와 학생 작품을 소개하고, 자료 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

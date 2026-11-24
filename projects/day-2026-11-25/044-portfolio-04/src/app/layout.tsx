import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "웹 개발자 프로젝트 포트폴리오",
  description: "만든 웹 서비스를 소개하고, 프로젝트 화면을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "사운드 디자이너 포트폴리오",
  description: "작업한 효과음과 사운드트랙을 소개하고, 음원 파일을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

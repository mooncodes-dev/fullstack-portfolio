import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "성우 포트폴리오",
  description: "녹음한 목소리 샘플을 소개하고, 샘플 음성 파일을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

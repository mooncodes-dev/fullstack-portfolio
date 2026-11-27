import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "오디오북 성우 포트폴리오",
  description: "녹음한 오디오북 샘플과 출연작을 소개하고, 방문자가 샘플에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

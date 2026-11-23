import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "연구자 포트폴리오",
  description: "발표한 논문과 연구 주제를 정리하고, 논문을 파일로 업로드해 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

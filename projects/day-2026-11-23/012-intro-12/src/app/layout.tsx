import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "강연과 발표 이력 소개 페이지",
  description: "지금까지 한 강연과 발표를 목록으로 정리하고, 발표 자료를 파일로 업로드해 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

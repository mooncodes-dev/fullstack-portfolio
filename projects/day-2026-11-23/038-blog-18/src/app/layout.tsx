import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자전거 라이딩 블로그",
  description: "라이딩 코스와 기록을 정리하고, 코스를 파일로 업로드해 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

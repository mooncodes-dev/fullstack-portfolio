import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "러닝 코스 공유 페이지",
  description: "동네 러닝 코스를 공유하고, 코스 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

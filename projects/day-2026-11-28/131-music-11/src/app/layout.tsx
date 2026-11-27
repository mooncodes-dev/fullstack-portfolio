import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "피아노 연주곡 감상 페이지",
  description: "좋아하는 피아노 연주곡과 연주자를 기록하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

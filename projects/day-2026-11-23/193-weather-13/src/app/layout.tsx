import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 관측 기록 공유 사이트",
  description: "직접 관측한 날씨를 사진과 함께 기록해 공유하는 사이트이다. 관측 사진을 파일 업로드로 첨부하고 댓글을 달아 관측 결과를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

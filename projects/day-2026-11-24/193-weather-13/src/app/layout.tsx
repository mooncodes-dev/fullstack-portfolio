import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "축제 날씨 안내 사이트",
  description: "야외 축제 당일의 날씨를 알려주는 사이트이다. 축제 사진을 파일 업로드로 첨부하고 날씨 후기에 댓글을 달 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

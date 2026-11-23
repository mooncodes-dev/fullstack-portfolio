import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 사진 콘테스트 사이트",
  description: "날씨 사진을 올리고 투표하는 콘테스트 사이트이다. 콘테스트 사진을 파일 업로드로 올리고 작품에 댓글과 좋아요를 달 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

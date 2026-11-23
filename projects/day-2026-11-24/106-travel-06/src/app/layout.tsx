import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "섬 여행 일지 사이트",
  description: "다녀온 섬의 풍경과 맛집을 기록하는 사이트이다. 섬 사진을 파일 업로드로 첨부해 일지를 꾸밀 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

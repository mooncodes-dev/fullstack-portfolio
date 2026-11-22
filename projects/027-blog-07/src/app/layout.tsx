import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "이미지 업로드 블로그",
  description: "글에 대표 이미지를 업로드할 수 있는 블로그입니다. 이미지 파일은 서버에 저장하고 파일 경로는 DB에 기록하며, 목록에서는 썸네일로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

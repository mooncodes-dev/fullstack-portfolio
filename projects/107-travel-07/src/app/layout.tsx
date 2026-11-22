import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 사진 갤러리 사이트",
  description: "여행 사진을 장소 태그와 함께 올리고 태그로 모아 보는 갤러리입니다. 사진 파일은 서버에, 태그와 설명은 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

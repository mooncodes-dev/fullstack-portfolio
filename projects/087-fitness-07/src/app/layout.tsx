import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 영상 북마크 페이지",
  description: "운동 영상 링크를 부위별로 등록하고 북마크할 수 있는 페이지입니다. 영상 정보와 북마크는 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

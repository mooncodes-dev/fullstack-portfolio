import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 전후 식사 기록 페이지",
  description: "운동 전후에 먹는 식단을 기록하고, 식단 사진을 파일로 업로드할 수 있다. 방문자가 식단에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "속초 바다 여행 기록",
  description: "속초의 바다와 해변을 기록하고, 바닷가 사진을 파일로 업로드할 수 있다. 기록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

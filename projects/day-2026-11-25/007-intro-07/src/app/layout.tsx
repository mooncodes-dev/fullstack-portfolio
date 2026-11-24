import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 반려견 산책 코스 소개 페이지",
  description: "반려견과 걷는 산책 코스를 사진과 함께 소개하고, 코스 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 반려식물 소개 페이지",
  description: "키우는 식물의 성장 과정을 소개하고, 방문자가 식물 사진에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

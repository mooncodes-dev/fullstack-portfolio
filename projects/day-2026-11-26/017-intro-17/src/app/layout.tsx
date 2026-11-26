import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 키우는 다육식물 소개 페이지",
  description: "키우는 다육식물의 종류와 관리법을 소개하고, 식물 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

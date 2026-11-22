import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "조리 단계별 사진 레시피 사이트",
  description: "단계마다 사진과 설명을 올릴 수 있는 레시피 사이트입니다. 단계 순서와 이미지 경로를 DB에 저장하고 순서대로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

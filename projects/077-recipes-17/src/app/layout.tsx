import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나만의 레시피 노트 사이트",
  description: "남의 레시피를 내 방식으로 고쳐서 비공개 노트로 저장하는 기능입니다. 원본 레시피와 내 수정본을 따로 DB에 저장하고 본인만 볼 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

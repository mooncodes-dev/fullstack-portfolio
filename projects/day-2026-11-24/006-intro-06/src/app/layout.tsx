import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계절별 옷장 정리 소개 페이지",
  description: "계절마다 입는 옷을 정리해 소개하고, 옷 사진을 파일로 업로드할 수 있다. 옷장 항목은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

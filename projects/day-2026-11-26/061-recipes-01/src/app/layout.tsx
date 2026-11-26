import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계란 없는 디저트 레시피 모음",
  description: "계란 없이 만드는 디저트를 소개하고, 완성 사진을 파일로 업로드할 수 있다. 레시피는 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

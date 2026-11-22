import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기본 레시피 CRUD 사이트",
  description: "요리 이름, 재료, 만드는 법을 등록하고 수정·삭제할 수 있는 사이트입니다. 레시피는 DB에 저장되고 사진 한 장을 업로드할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

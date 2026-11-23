import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "디자이너 포트폴리오",
  description: "디자인 작업물을 갤러리 형태로 소개하고, 작업물마다 설명을 함께 보여준다. 작업물은 추가·수정·삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

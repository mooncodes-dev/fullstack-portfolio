import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자취생 간편 레시피 사이트",
  description: "10분 안에 만드는 간단한 레시피를 공유하고, 레시피를 추가·수정·삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

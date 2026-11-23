import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "클래식 입문 플랫폼",
  description: "처음 듣는 사람을 위한 클래식 명곡을 소개하는 플랫폼이다. 곡을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

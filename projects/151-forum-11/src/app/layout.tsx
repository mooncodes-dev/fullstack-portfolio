import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "쪽지 포럼",
  description: "회원끼리 1:1 쪽지를 주고받는 기능을 붙인 포럼입니다. 쪽지는 DB에 저장되고 읽음 표시와 안 읽은 쪽지 개수를 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

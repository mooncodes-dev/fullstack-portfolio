import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "공지와 고정글 포럼",
  description: "관리자가 공지를 상단에 고정할 수 있는 포럼입니다. 고정 여부는 DB에 저장하고 관리자 권한이 있는 계정만 바꿀 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

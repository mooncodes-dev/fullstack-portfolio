import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "버킷리스트 여행 사이트",
  description: "가고 싶은 여행지를 저장해두고 다녀오면 다녀온 곳으로 표시를 바꾸는 사이트입니다. 목록은 사용자별로 DB에 저장되고 달성 개수를 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

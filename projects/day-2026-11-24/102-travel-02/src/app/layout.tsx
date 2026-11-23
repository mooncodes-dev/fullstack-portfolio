import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "당일치기 여행 일지 사이트",
  description: "당일치기로 다녀온 여행지를 기록하는 사이트이다. 마음에 드는 일지에 좋아요를 눌러 인기 당일 여행지를 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

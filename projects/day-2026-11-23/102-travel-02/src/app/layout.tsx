import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "테마 여행 일지 모음 사이트",
  description: "바다, 산, 도시 등 테마별로 여행 일지를 모아 보여주는 사이트이다. 마음에 드는 일지에 좋아요를 눌러 테마별 인기 일지를 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

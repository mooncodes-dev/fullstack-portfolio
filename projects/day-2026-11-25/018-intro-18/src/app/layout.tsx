import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수집한 빈티지 소품 소개 페이지",
  description: "모은 빈티지 소품의 이야기를 소개하고, 방문자가 소품에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

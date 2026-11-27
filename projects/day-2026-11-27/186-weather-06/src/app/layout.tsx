import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "바다 날씨 정보 페이지",
  description: "바다 날씨와 파도 정보를 제공하고, 방문자가 날씨 기록에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "작곡가 데모 포트폴리오",
  description: "만든 곡의 데모를 소개하고, 방문자가 곡에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

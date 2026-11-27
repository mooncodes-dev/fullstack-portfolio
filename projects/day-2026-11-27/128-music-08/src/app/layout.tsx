import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "클래식 음악 입문 추천",
  description: "클래식 입문자를 위한 곡을 추천하고, 작곡가 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

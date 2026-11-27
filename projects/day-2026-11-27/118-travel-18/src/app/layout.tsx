import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "역사 유적 여행 일지",
  description: "다녀온 역사 유적과 이야기를 기록하고, 방문자가 일지에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

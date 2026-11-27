import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계절별 음악 추천",
  description: "계절에 어울리는 곡을 추천하고, 계절 이름으로 곡을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

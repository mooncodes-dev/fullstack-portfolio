import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상체 운동 기록 페이지",
  description: "팔과 가슴 운동의 세트와 무게를 기록하고, 운동을 검색해 기록을 찾을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

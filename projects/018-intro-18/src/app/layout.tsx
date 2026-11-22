import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "친구 추천사 페이지",
  description: "지인들이 나에 대한 추천사를 남기는 페이지입니다. 추천사는 제출 즉시 공개되지 않고 DB에 \"승인 대기\" 상태로 저장되며, 본인이 승인한 것만 페이지에 표시됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

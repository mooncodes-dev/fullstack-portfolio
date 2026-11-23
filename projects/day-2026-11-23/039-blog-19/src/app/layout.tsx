import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "정원 가꾸기 블로그",
  description: "기르는 식물의 성장 과정을 기록하고, 방문자가 댓글로 조언을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

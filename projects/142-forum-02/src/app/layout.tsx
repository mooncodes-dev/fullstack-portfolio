import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "회원 등급 포럼",
  description: "글과 댓글 활동량에 따라 회원 등급이 오르는 포럼입니다. 활동 점수는 DB에 기록되고 등급별 배지가 이름 옆에 표시됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

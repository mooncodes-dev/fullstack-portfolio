import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 커뮤니티 챌린지 플랫폼",
  description: "여러 사람이 참여하는 운동 챌린지를 운영하고, 관리자가 챌린지를 개설하고 참여 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

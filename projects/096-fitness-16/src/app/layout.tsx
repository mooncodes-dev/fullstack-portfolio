import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 일정 공유 페이지",
  description: "내 운동 일정을 공개 프로필에 올리고 다른 사람이 보고 좋아요를 누를 수 있는 페이지입니다. 일정은 DB에 저장되고 팔로우한 사람의 일정만 모아 볼 수도 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

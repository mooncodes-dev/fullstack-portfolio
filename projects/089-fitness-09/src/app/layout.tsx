import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "함께 운동하는 모임 페이지",
  description: "러닝, 등산 같은 운동 모임을 만들고 참여 신청을 받는 페이지입니다. 모임 정보와 참여자 목록은 DB에 저장되고 정원이 차면 마감 표시를 합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

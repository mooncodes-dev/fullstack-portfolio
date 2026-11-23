import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 식단 추천 페이지",
  description: "운동 목표별 식단을 추천하고, 식단에 좋아요를 누를 수 있다. 회원가입과 로그인으로 식단을 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

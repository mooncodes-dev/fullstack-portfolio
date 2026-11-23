import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "비 오는 날 실내 활동 추천 사이트",
  description: "회원가입과 로그인을 하면 비 오는 날 할 실내 활동을 추천받는 사이트이다. 마음에 드는 활동에 좋아요를 눌러 나만의 비 오는 날 목록을 만들 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

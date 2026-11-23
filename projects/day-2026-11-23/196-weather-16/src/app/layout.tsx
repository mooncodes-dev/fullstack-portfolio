import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 예보 구독 사이트",
  description: "회원가입과 로그인을 하면 매일 아침 날씨 예보를 받아보는 사이트이다. 구독 지역을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

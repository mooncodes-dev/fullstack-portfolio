import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캠핑카 여행 일지 사이트",
  description: "캠핑카로 떠난 여행의 숙박지와 코스를 기록하는 사이트이다. 회원가입과 로그인을 하면 나만의 일지장을 만들 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "눈 예보와 스키 시즌 사이트",
  description: "눈이 오는 지역과 스키장 개장 소식을 알려주는 사이트이다. 회원가입과 로그인을 하면 자주 가는 스키장의 날씨를 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

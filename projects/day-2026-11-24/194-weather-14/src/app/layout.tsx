import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "웨딩 야외 날씨 안내 사이트",
  description: "야외 결혼식 당일의 날씨를 알려주는 사이트이다. 회원가입과 로그인을 하면 예식장의 날씨를 저장하고 알림을 받을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

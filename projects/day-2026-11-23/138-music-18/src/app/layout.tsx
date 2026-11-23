import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음반 발매 캘린더 플랫폼",
  description: "회원가입과 로그인을 하면 음반 발매 일정을 캘린더에 등록하는 플랫폼이다. 아티스트를 검색해 발매 일정을 찾아보고 알림을 설정할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

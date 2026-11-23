import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "박물관 여행 일지 사이트",
  description: "다녀온 박물관과 전시를 기록하는 사이트이다. 회원가입과 로그인을 하면 나만의 관람 일지를 만들 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

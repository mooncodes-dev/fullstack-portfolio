import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나만의 여행 일지장 사이트",
  description: "회원가입과 로그인을 하면 나만의 여행 일지장을 만들 수 있는 사이트이다. 내 일지는 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

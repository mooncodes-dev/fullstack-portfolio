import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행자 소개 프로필 일지 사이트",
  description: "회원가입과 로그인을 하면 여행자 프로필을 만들고 일지를 연동하는 사이트이다. 프로필과 일지를 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

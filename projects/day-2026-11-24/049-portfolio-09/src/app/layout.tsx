import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 사진가 포트폴리오",
  description: "여행지에서 찍은 사진을 지역별로 정리하고, 방문자가 사진에 댓글을 남길 수 있다. 회원가입과 로그인으로 나만의 사진첩을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

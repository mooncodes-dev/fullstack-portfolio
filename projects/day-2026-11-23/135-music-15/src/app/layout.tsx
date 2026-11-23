import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "노래방 점수 기록 플랫폼",
  description: "회원가입과 로그인을 하면 노래방 점수를 기록하는 플랫폼이다. 점수를 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다채로운 자기소개 대시보드 페이지",
  description: "소개, 이력, 취미, 연락처를 한 화면에 모으고, 관리자가 방문자 문의와 댓글을 한곳에서 관리할 수 있다. 로그인한 관리자만 문의 내역을 확인하고 답장을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "문의 메일함이 있는 소개 페이지",
  description: "방문자가 이름, 이메일, 내용을 적어 보내는 문의 폼을 만들고, 문의 내용은 DB에 저장하세요. 관리자 로그인 후에만 문의 목록을 볼 수 있는 간단한 관리자 페이지를 함께 만듭니다",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

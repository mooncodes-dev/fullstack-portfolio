import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 관리자 대시보드 사이트",
  description: "관리자가 날씨 정보와 예보를 검수하는 사이트이다. 회원가입과 로그인을 한 뒤 날씨 정보를 등록하면 관리자가 내용을 확인하고 공개 여부를 결정한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

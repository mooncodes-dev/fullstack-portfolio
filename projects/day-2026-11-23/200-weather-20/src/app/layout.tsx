import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "전국 날씨 통합 관제 사이트",
  description: "전국 날씨를 한 화면에서 관제하는 통합 사이트이다. 회원가입과 로그인을 하면 관심 지역을 저장하고, 지역을 검색하며, 날씨 알림에 댓글을 달고 좋아요를 눌러 공유할 수 있고, 관리",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

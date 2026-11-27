import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "전국 날씨 관측 종합 플랫폼",
  description: "전국 관측소의 날씨 정보를 한 화면에서 보고, 관리자가 관측 데이터를 검수한다. 회원가입과 로그인을 하면 관심 지역을 저장하고, 지역을 검색하며, 날씨 기록에 댓글을 달고 좋아요를",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

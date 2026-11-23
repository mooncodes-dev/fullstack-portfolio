import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "지역 기상 관측소 통합 사이트",
  description: "전국 기상 관측소의 데이터를 한 화면에서 보는 통합 사이트이다. 회원가입과 로그인을 하면 관심 관측소를 저장하고, 지역을 검색하며, 관측 기록에 댓글을 달고 좋아요를 눌러 공유할 ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

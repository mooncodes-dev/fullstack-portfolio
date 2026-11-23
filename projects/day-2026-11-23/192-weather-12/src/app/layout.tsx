import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스키장 날씨 안내 사이트",
  description: "회원가입과 로그인을 하면 자주 가는 스키장의 날씨를 저장하는 사이트이다. 스키장별 날씨를 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

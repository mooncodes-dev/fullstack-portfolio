import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "도시별 날씨 즐겨찾기 사이트",
  description: "회원가입과 로그인을 하면 자주 확인하는 도시의 날씨를 즐겨찾기로 저장하는 사이트이다. 도시를 검색해 즐겨찾기에 추가하고 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

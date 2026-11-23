import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다국어 여행 일지 번역 사이트",
  description: "여러 나라 언어로 여행 일지를 번역해 공유하는 사이트이다. 회원가입과 로그인을 하면 내 일지를 번역해 올릴 수 있고, 관리자가 번역 품질을 검수하며, 여행지 이름을 검색해 언어별 ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

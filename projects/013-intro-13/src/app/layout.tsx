import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다국어 자기소개 페이지",
  description: "한국어/영어 버튼을 누르면 소개 내용이 바뀌는 페이지입니다. 각 언어별 소개 문구를 DB에 따로 저장하고, 관리자가 두 언어의 문구를 모두 수정할 수 있게 만드세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

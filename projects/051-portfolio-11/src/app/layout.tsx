import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다국어 포트폴리오",
  description: "한국어와 영어 두 버전의 프로젝트 설명을 DB에 저장하고 언어 버튼으로 전환하는 포트폴리오입니다. 관리자 페이지에서 두 언어를 함께 수정합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

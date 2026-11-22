import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "팀 프로젝트 멤버 소개 포트폴리오",
  description: "프로젝트마다 참여한 멤버와 역할을 함께 보여주는 포트폴리오입니다. 멤버 정보를 DB에 저장하고 프로젝트와 연결하는 관계를 설계하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

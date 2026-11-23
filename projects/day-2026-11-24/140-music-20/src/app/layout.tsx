import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 취향 분석 통합 플랫폼",
  description: "취향 데이터를 모아 음악을 추천하는 통합 플랫폼이다. 회원가입과 로그인을 하면 내 취향 데이터를 등록하고, 곡을 검색하며, 플레이리스트 파일을 파일 업로드로 가져올 수 있고, 관리",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

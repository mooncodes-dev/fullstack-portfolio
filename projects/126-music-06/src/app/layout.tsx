import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 취향 테스트 플랫폼",
  description: "몇 가지 질문에 답하면 어울리는 곡을 추천해주는 플랫폼입니다. 질문과 추천 곡 매핑은 DB에 저장하고 결과 공유 횟수를 셉니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

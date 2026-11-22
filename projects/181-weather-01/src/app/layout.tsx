import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "현재 날씨 조회 사이트",
  description: "도시 이름을 입력하면 외부 날씨 API를 연동해 현재 기온과 상태를 보여주는 사이트입니다. 조회한 도시를 DB에 저장해 최근 검색 목록으로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

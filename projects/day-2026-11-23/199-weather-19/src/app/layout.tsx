import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 API 흉내 사이트",
  description: "날씨 데이터를 API 형태로 제공하는 흉내 사이트이다. 관리자가 날씨 데이터를 검수하고, 지역을 검색해 데이터를 조회하며, 예보 파일을 파일 업로드로 등록할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

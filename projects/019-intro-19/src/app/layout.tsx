import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내 위치와 날씨가 함께 뜨는 소개 페이지",
  description: "사는 도시를 소개하면서 외부 날씨 API를 연동해 그 도시의 현재 날씨를 함께 보여주세요. 도시 정보는 DB에 저장하고 관리자 페이지에서 바꿀 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

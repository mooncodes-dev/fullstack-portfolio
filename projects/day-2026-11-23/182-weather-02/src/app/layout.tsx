import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내일 날씨 예보 사이트",
  description: "내일 날씨를 미리 알려주는 사이트이다. 지역 이름을 검색하면 내일 날씨 예보를 바로 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

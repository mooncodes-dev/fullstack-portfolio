import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "낚시 날씨 안내 사이트",
  description: "낚시터의 날씨와 물때를 알려주는 사이트이다. 낚시터 이름을 검색해 날씨를 바로 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "항공편 날씨 안내 사이트",
  description: "비행기가 뜨는 공항의 날씨와 지연 가능성을 알려주는 사이트이다. 자주 이용하는 공항을 즐겨찾기에 저장하고 날씨를 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

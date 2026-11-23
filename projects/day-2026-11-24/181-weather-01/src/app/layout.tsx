import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "오늘의 자외선 지수 사이트",
  description: "오늘의 자외선 지수와 피부 보호 팁을 알려주는 사이트이다. 지역을 검색하면 자외선 지수를 바로 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

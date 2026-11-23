import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "일출 일몰 시간 안내 사이트",
  description: "지역별 일출과 일몰 시간을 알려주는 사이트이다. 지역을 검색하고 아름다운 일출 명소에 좋아요를 눌러 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

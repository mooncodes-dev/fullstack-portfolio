import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "미세먼지 정보 페이지",
  description: "지역별 미세먼지 정보를 제공하고, 지역 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

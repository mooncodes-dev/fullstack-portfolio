import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "웨딩 플로리스트 포트폴리오",
  description: "웨딩용 꽃 장식과 부케 작품을 계절별로 보여주고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

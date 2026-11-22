import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "옷차림 추천 사이트",
  description: "API로 받은 기온에 따라 어울리는 옷차림을 추천하는 사이트입니다. 기온 구간별 추천 문구는 DB에 저장하고 관리자가 수정할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

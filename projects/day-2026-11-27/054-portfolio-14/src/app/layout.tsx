import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "카페 인테리어 디자이너 포트폴리오",
  description: "꾸민 카페 공간을 전후 사진과 함께 보여주고, 방문자가 공간에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

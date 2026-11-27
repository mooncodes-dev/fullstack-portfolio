import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주방 인테리어 디자이너 포트폴리오",
  description: "설계한 주방 공간과 수납 사례를 보여주고, 사례를 추가·수정·삭제할 수 있다. 방문자가 사례에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

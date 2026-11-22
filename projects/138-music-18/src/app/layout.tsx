import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "앨범 컬렉션 플랫폼",
  description: "내가 가진 앨범을 등록하고 사진과 함께 컬렉션으로 보여주는 플랫폼입니다. 앨범 정보는 DB에 저장되고 갖고 싶은 앨범 위시리스트도 따로 관리합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

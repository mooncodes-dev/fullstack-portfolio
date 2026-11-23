import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "취미 지도와 함께 보는 자기소개 페이지",
  description: "좋아하는 장소와 취미를 지도 형태의 목록으로 소개한다. 취미 항목을 추가·수정·삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

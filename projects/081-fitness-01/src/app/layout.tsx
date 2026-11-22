import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 종류 소개 페이지",
  description: "운동 이름, 부위, 설명을 DB에 저장하고 부위별로 필터링해서 보여주는 기본 정보 페이지를 만드세요. 정보 수정은 관리자만 할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

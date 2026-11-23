import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 경비 영수증 일지 사이트",
  description: "영수증 사진을 파일 업로드로 첨부해 경비를 기록하는 사이트이다. 영수증별 지출 내역에 댓글을 달아 동행자와 내역을 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

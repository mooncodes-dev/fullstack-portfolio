import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "교환 반품 신청 상점",
  description: "교환이나 반품을 신청하고 진행 상황을 확인하는 상점이다. 신청서 사진을 파일 업로드로 첨부하고 진행 상황에 댓글을 달아 문의할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

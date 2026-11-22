import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "디지털 상품 상점",
  description: "전자책 파일 같은 디지털 상품을 팔고, 주문 완료 후 다운로드 링크를 제공하는 상점입니다. 다운로드 횟수 제한을 DB에 기록해 관리하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

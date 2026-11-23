import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "배송 추적 상점",
  description: "주문한 상품의 배송 과정을 단계별로 보여주는 상점이다. 송장 파일을 파일 업로드로 등록해 배송 정보를 함께 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

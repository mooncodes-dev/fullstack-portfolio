import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "뷰티 박스 상점",
  description: "매달 새로운 화장품이 담긴 뷰티 박스를 소개하는 상점이다. 박스 구성품 사진을 파일 업로드로 등록해 후기를 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

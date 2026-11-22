import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 뉴스레터 구독 플랫폼",
  description: "매주 새 앨범 소식을 전하는 뉴스레터 구독 폼과 발송 목록 관리 페이지를 만드세요. 구독자 정보는 DB에 저장되고 구독 해지도 처리합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

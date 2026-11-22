import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "이벤트 응모 포럼",
  description: "게시판 공지에서 이벤트 응모 버튼을 누르면 응모자 목록에 등록되는 포럼입니다. 응모 기록은 DB에 저장되고 관리자가 추첨 결과를 공지할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "트레이너 상담 신청 페이지",
  description: "상담 신청 폼에 이름, 연락처, 고민을 적어 보내면 DB에 저장되고, 트레이너 계정만 신청 목록을 보고 답변 상태를 바꿀 수 있는 페이지를 만드세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

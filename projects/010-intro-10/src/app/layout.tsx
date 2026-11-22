import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "구독 신청이 있는 뉴스레터 소개 페이지",
  description: "내 근황을 전하는 뉴스레터 구독 폼을 만들고, 구독자 이메일을 DB에 저장하세요. 이메일 형식을 검사하고, 이미 구독한 이메일은 중복 신청을 막는 처리까지 구현합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

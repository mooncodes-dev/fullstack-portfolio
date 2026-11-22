import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "비공개 가족 여행 사이트",
  description: "가족만 볼 수 있는 여행 기록 사이트입니다. 초대 코드가 있어야 회원가입이 가능하게 하고, 일지는 회원만 볼 수 있게 접근을 막으세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

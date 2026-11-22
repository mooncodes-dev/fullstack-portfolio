import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "회원 전용 상점",
  description: "회원가입한 사람만 주문할 수 있고 비회원은 구경만 가능한 상점입니다. 주문 내역은 사용자별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

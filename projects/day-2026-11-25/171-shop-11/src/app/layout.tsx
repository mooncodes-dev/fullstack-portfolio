import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아기 옷 온라인 상점",
  description: "아기 옷을 판매하고, 회원가입과 로그인으로 주문을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

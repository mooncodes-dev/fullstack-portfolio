import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아이 옷 상점",
  description: "아이 옷을 파는 상점으로, 회원가입과 로그인으로 나만의 주문 내역을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

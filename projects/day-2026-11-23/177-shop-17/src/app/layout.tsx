import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "회원 등급 혜택 상점",
  description: "회원가입과 로그인을 하면 등급별 혜택을 확인하고 이용할 수 있는 상점이다. 등급별 혜택 상품에 좋아요를 눌러 인기 혜택을 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

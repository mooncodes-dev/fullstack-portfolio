import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내 동네 날씨 사이트",
  description: "회원가입할 때 동네를 저장해두면 로그인하자마자 그 동네 날씨가 뜨는 사이트입니다. 사용자 동네 정보는 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

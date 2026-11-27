import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "트로트 명곡 페이지",
  description: "트로트 명곡과 가수를 기록하고, 회원가입과 로그인으로 나만의 트로트 목록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

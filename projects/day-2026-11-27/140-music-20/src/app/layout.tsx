import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 추천 종합 플랫폼",
  description: "여러 큐레이터의 음악 추천을 함께 제공하고, 관리자가 추천을 검수하고 큐레이터를 관리할 수 있다. 회원가입과 로그인으로 큐레이터를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

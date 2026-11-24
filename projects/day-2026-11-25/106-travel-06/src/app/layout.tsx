import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "전주 한옥마을 여행 일지",
  description: "전주 한옥마을의 볼거리와 먹거리를 기록하고, 회원가입과 로그인으로 나만의 여행 일지를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

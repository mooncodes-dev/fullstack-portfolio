import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "공부할 때 듣는 음악 공유",
  description: "집중할 때 듣는 음악을 공유하고, 회원가입과 로그인으로 나만의 플레이리스트를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "노래방 애창곡 공유",
  description: "노래방 애창곡을 공유하고, 회원가입과 로그인으로 나만의 애창곡 목록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

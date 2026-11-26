import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "남해안 섬 여행 기록",
  description: "남해안의 섬들을 기록하고, 회원가입과 로그인으로 나만의 여행 일지를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

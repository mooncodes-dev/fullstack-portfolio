import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "취미 장비 컬렉션 소개 페이지",
  description: "수집한 취미 장비를 소개하고, 장비마다 구입처와 사용 후기를 기록한다. 회원가입과 로그인으로 나만의 컬렉션을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

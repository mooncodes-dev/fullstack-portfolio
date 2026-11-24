import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 텃밭 가꾸기 일지 소개 페이지",
  description: "텃밭에서 키우는 채소 기록을 정리하고, 회원가입과 로그인으로 나만의 텃밭 일지를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

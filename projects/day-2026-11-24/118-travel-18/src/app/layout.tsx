import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "출장 겸 여행 일지 사이트",
  description: "출장 중 틈틈이 다녀온 여행지를 기록하는 사이트이다. 회원가입과 로그인을 하면 출장 여행 일지를 따로 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

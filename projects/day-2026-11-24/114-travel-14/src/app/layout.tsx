import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "반려동물 동반 여행 일지 사이트",
  description: "반려동물과 함께 다녀온 여행을 기록하는 사이트이다. 회원가입과 로그인을 하면 반려동물 동반 여행 일지를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

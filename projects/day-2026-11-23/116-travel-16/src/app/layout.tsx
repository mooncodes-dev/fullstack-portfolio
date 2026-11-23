import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 일지 북마크 모음 사이트",
  description: "회원가입과 로그인을 하면 마음에 드는 여행 일지를 북마크해 모을 수 있는 사이트이다. 북마크한 일지에 좋아요를 눌러 나만의 여행 목록을 만들 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

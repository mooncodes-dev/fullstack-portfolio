import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수집한 엽서와 우표 소개 페이지",
  description: "모은 엽서와 우표의 사진을 파일로 업로드해 소개하고, 회원가입과 로그인으로 나만의 컬렉션을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

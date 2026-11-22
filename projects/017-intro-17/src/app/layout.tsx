import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "비밀번호로 여는 비밀 일기 소개 페이지",
  description: "공개 소개 영역과, 비밀번호를 입력해야만 들어갈 수 있는 비공개 일기 영역을 나누세요. 일기 글은 DB에 저장되고, 비밀번호 검사는 서버에서 처리합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

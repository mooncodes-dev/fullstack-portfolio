import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아티스트 인터뷰 아카이브 플랫폼",
  description: "아티스트 인터뷰 음성 파일을 파일 업로드로 올려 보관하는 플랫폼이다. 인터뷰를 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

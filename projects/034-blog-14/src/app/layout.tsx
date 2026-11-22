import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "시리즈 블로그",
  description: "여러 글을 하나의 시리즈로 묶어 순서대로 읽을 수 있게 하세요. 시리즈 정보와 글의 순서를 DB에 저장하고, 글 하단에 이전 글·다음 글 이동 버튼을 만듭니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

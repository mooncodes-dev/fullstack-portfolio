import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "태그 블로그",
  description: "글에 여러 개의 태그를 달 수 있게 하고, 태그를 누르면 같은 태그의 글이 모여 보이게 하세요. 글과 태그를 다대다 관계로 DB에 설계하는 연습이 됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

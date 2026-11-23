import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨별 활동 추천 사이트",
  description: "날씨에 어울리는 활동을 추천해 주는 사이트이다. 활동 추천에 댓글을 달아 다녀온 후기를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

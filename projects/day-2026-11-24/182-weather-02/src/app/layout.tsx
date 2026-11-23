import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "황사 예보 사이트",
  description: "황사 발생 시기와 농도를 미리 알려주는 사이트이다. 황사 예보에 댓글을 달아 실제 날씨와 비교한 후기를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

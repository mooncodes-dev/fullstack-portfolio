import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "바다 날씨 안내 사이트",
  description: "해수욕장과 낚시터의 바다 날씨를 알려주는 사이트이다. 바다 날씨 후기에 댓글과 좋아요를 달아 정보를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

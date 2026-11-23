import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "단풍 시기 날씨 사이트",
  description: "단풍이 드는 시기와 명소의 날씨를 알려주는 사이트이다. 단풍 명소에 좋아요를 눌러 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

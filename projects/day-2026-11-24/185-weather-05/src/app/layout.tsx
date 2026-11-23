import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "벚꽃 개화 시기 날씨 사이트",
  description: "벚꽃 개화 시기와 명소의 날씨를 알려주는 사이트이다. 명소 사진을 파일 업로드로 올려 개화 상황을 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
